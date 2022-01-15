import { Header } from "../components/Header";
import { useNavigate } from "react-router";
import { useTransactions } from "../hooks/useTransactions";
import { useEffect } from "react";

import { Graphics } from "../components/Graphics/Graphics";

import { Container } from '../styles/profile';
import User from '../assets/user.svg'

export function Profile(){
    const { user } = useTransactions();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user.id){
            navigate('/Login')
            return;
        }
    }, [])

    return(
        <>
            <Header label="Home" onOpenNewTransactionModal={() => navigate('/')} />
            <Container>
                <main>
                    <div className="shape">
                        <img src={User} alt="customer photo"/>
                        <h2>{user.customer}</h2>
                    </div>
                    <div className="shape" id="depositsWithdraws">
                        <span>
                            <h2>Entradas</h2>
                            <h2>Saídas</h2>
                        </span>
                        
                        <Graphics whichGraphic="deposits/withdraws"/>
                    </div>
                </main>
                <Graphics whichGraphic="graphic2"/>
            </Container>
        </>
    )
}