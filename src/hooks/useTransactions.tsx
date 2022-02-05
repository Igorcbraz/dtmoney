import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";

interface Transactions {
    FK_id_user?: number;
    id: number | any;
    title: string;
    amount: number;
    tipo: string;
    category: string;
    payer: string;
    createdAt: string;
}

interface User {
    id: number | null;
    customer: string | null;
    email: string | null;
    createdAt: string | null;
    status?: string;
    err?: object;
}
interface UserInputRegister {
    name: string;
    email: string;
    pass: string;
}

type UserInputLogin   = Omit<UserInputRegister, 'name'>
type TransactionInput = Omit<Transactions, 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    setFilterTransactions: (newTransaction: Transactions[]) => void;
    filterTransactions: Transactions[];
    deleteTransaction: (id : number, userId?: number) => Promise<1 | 0>;
    updateTransaction: (transaction : Transactions) => Promise<1 | 0>
    

    loginUser: (user: UserInputLogin) => Promise<User>;
    user: User;
    setTransactions: (transaction: Transactions[]) => void;
    registerUser: (user: UserInputRegister) => Promise<User>;
    logout: () => void;

    currentPage: number;
    setCurrentPage: (page: number) => void;
    rangePagination: number;
    setRangePagination: (range: number) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState<Transactions[]>(() => {
        const transactionsLocalStorage = localStorage.getItem('Transactions');
        
        if (transactionsLocalStorage) {
          return JSON.parse(transactionsLocalStorage);
        }
    
        return [];
    });
    const [filterTransactions, setFilterTransactions] = useState<Transactions[]>([]);
    const [user, setUser] = useState<User | any>(() => {
        const data = localStorage.getItem('Token');

        if (data) {
          return jwt_decode(data);
        }
    
        return {};
    });;
    const [currentPage, setCurrentPage] = useState(0);
    const [rangePagination, setRangePagination] = useState(5)

    if(process.env.REACT_APP_STAGE !== 'dev'){
        window.addEventListener("beforeunload", logout)
    }

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const transaction = response.data;
        
        if(transaction.status){
            return;
        }

        setTransactions([
            ...transactions,
            transaction
        ])

        localStorage.setItem('Transactions', JSON.stringify([
            ...transactions,
            transaction
        ]))
    }

    async function deleteTransaction(transactionId: number, userId?: number){
        const { data } = await api.delete(`transactions/${transactionId}/${userId}`);

        if(data === 0 || data.status){
            console.error(data);
            return 0;
        } else {
            localStorage.setItem('Transactions', JSON.stringify(data));
            setTransactions(data);

            return 1;
        }
    }
    async function updateTransaction(transaction : Transactions){
        const { data } = await api.put('transactions', {
            title: transaction.title,
            amount: transaction.amount,
            tipo: transaction.tipo,
            category: transaction.category,
            payer: transaction.payer,
            id: transaction.id,
            FK_id_user: transaction.FK_id_user
        });

        if(data === 0 || data.status){
            console.log(data);
            return 0;
        } else {
            localStorage.setItem('Transactions', JSON.stringify(data));
            setTransactions(data);

            return 1;
        }
    }

    async function loginUser({email, pass}: UserInputLogin){
        const { data } = await api.post('login', {
            email: email,
            pass: pass
        });

        if(data.jwt){
            const user_data = jwt_decode(data.jwt);
            
            localStorage.setItem('Token', data.jwt)
            
            setUser(user_data);
        } 

        return user;
    }

    async function registerUser({name, pass, email}: UserInputRegister){
        const { data } = await api.post('register', {
            customer: name,
            pass: pass,
            email: email,
            createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        });

        if(data.jwt){
            const user_data = jwt_decode(data.jwt);
            
            localStorage.setItem('Token', data.jwt)
            
            setUser(user_data);
        } 

        return user;
    }

    function logout(){
        localStorage.clear()
        window.location.href = '/';
    }

    return (
        <TransactionsContext.Provider 
            value={{ 
                transactions     , createTransaction , filterTransactions, setFilterTransactions,
                updateTransaction, deleteTransaction , setCurrentPage    , currentPage          ,
                rangePagination  , setRangePagination,
                
                loginUser, user, setTransactions, registerUser, logout
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context;
}
