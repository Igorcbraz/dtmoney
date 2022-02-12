// tslint:disable:no-var-requires
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { useTransactions } from "../hooks/useTransactions";

import { Header } from "../components/Header";
import { MonthFilter } from "../components/MonthFilter";
import { VerticalBar } from "../components/Graphics/VerticalBar";
import { DonutChart } from "../components/Graphics/DonutChart";

import User from '../assets/user.svg'

import { Container } from '../styles/profile';

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
            <Helmet>
                <title>Profile | Dtmoney</title>
            </Helmet>
            <Header label="Home" onOpenNewTransactionModal={() => navigate('/Home')} />
            <Container>
                <main>
                    <div className="shape">
                        <img src={User} alt="customer photo"/>
                        <h2>{user.customer}</h2>
                    </div>
                    <div className="shape" id='category'>
                        <DonutChart whichChart="categoriesWithdraw"/>
                    </div>
                </main>
                <div className="shape" id="depositsWithdraws">
                    <MonthFilter/>

                    <span>
                        <h2>Entradas</h2>
                        <h2 id='saidas'>Saídas</h2>
                        <h2 id='total'>Total</h2>
                    </span>
                    
                    <VerticalBar/>
                </div>
            </Container>
        </>
    )
}