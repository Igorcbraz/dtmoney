import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    tipo: string;
    category: string;
    payer: string;
    createdAt: string;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    setFilterTransactions: (newTransaction: Transactions[]) => void;
    filterTransactions: Transactions[];
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transactions[]>([]);
    const [filterTransactions, setFilterTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
      api.get('transactions')
        .then(response => setTransactions(response.data))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const transaction = response.data;
        console.log(transaction)
        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction, filterTransactions, setFilterTransactions}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context;
}