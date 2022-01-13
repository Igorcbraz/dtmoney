import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";


interface Transactions {
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
interface UserInput {
    email: string;
    pass: string;
}

type TransactionInput = Omit<Transactions, 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    setFilterTransactions: (newTransaction: Transactions[]) => void;
    filterTransactions: Transactions[];
    loginUser: (user: UserInput) => Promise<User>;
    user: User;
    setTransactions: (transaction: Transactions[]) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transactions[]>([]);
    const [filterTransactions, setFilterTransactions] = useState<Transactions[]>([]);
    const [user, setUser] = useState<User | any>(() => {
        const data = localStorage.getItem('Token');

        if (data) {
          return jwt_decode(data);
        }
    
        return {};
    });;

    

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const transaction = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    async function loginUser({email, pass}: UserInput){
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

    return (
        <TransactionsContext.Provider 
            value={{ transactions, createTransaction, filterTransactions, setFilterTransactions, loginUser, user, setTransactions}}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context;
}