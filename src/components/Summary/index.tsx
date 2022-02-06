import { useEffect, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import CountUp from 'react-countup';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container, Card } from "./style";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    tipo: string;
    category: string;
    payer: string;
    createdAt: string;
}

export function Summary(){
    const { transactions, filterTransactions } = useTransactions();
    const [rightTransactions, setRightTransactions] = useState<Transactions[]>(transactions)

    useEffect(() => {
        if(filterTransactions.length > 0){
            setRightTransactions(filterTransactions)
        } else {
            setRightTransactions(transactions)
        }
    }, [filterTransactions, transactions])


    const summary = rightTransactions.reduce((acc, transaction) => {
        if(transaction.tipo === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container>
            <Card>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <CountUp
                    end={summary.deposits}
                    separator=" "
                    duration={3}
                    decimals={2}
                    decimal=','
                    prefix="R$ "
                    preserveValue
                    className="deposits"
                />
            </Card>
            <Card>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <CountUp
                    end={summary.withdraws}
                    separator=" "
                    duration={3}
                    decimals={2}
                    decimal=','
                    prefix="R$ -"
                    preserveValue
                    className="deposits"
                />
            </Card>
            <Card haveWithdraws={summary.total >= 0 ? false : true}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <CountUp
                    end={summary.total}
                    separator=" "
                    duration={3}
                    decimals={2}
                    decimal=','
                    prefix="R$ "
                    preserveValue
                    className="deposits"
                />
            </Card>
        </Container>
    );
}