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
    loginUser: (user: UserInputLogin) => Promise<User>;
    user: User;
    setTransactions: (transaction: Transactions[]) => void;
    registerUser: (user: UserInputRegister) => Promise<User>;
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

    async function loginUser({email, pass}: UserInputLogin){
        const { data } = await api.post('login', {
            email: email,
            pass: pass
        });
        console.log(data)
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
        console.log(data)
        if(data.jwt){
            const user_data = jwt_decode(data.jwt);
            
            localStorage.setItem('Token', data.jwt)
            
            setUser(user_data);
        } 

        return user;
    }

    return (
        <TransactionsContext.Provider 
            value={{ transactions, createTransaction, filterTransactions, setFilterTransactions, loginUser, user, setTransactions, registerUser}}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context;
}