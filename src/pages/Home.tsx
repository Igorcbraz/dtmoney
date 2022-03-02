import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useTransactions } from "../hooks/useTransactions";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { NewTransactionModal } from '../components/NewTransactionModal';


export function Home(props: {}){
    const { setTransactions, user } = useTransactions();
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    const [hasTransactions, setHasTransactions] = useState(true);
    const navigate = useNavigate();
   
    useEffect(() => {
        if(!user.id){
            navigate('/Login')
            return;
        }
        if(!localStorage.getItem('Transactions')){
            api.get(`transactions/${user?.id}`)
            .then(response => {
              if(!response.data.status){
                if(response.data.length === 0){
                    setHasTransactions(false)
                    return;
                }
                setTransactions(response.data);
                localStorage.setItem('Transactions', JSON.stringify(response.data));
              } else {
                console.log('Houve um erro ao carregar as transações')
                console.error(response.data)
              }
            });
        }
    }, [])

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }
    return(
        <>
            <Helmet>
                <title>Dashboard | Dtmoney</title>
            </Helmet>
            <Header label="Nova transação" onOpenNewTransactionModal={handleOpenNewTransactionModal} userName/>
            <Dashboard hasTransactions={hasTransactions} setHasTransactions={setHasTransactions}/>
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
                setHasTransactions={setHasTransactions}
                hasTransactions={hasTransactions}
            />
        </>
    )
}