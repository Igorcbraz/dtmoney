import { useEffect, useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { NewTransactionModal } from '../components/NewTransactionModal';
import { api } from "../services/api";
import { useTransactions } from "../hooks/useTransactions";
import { useNavigate } from "react-router";


export function Home(){
    const { setTransactions, user } = useTransactions();
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user.id){
            navigate('/Login')
            return;
        }

        api.get(`transactions/${user?.id}`)
          .then(response => setTransactions(response.data));
    }, [])

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

    return(
        <>
            <Header label="Nova transação" onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </>
    )
}