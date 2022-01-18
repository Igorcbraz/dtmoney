import {
    XYPlot,
    VerticalBarSeries,
    HorizontalGridLines,
    VerticalGridLines,
    makeWidthFlexible,
    XAxis,
    YAxis
} from 'react-vis';
import { useTransactions } from '../../../hooks/useTransactions';

import '../../../../node_modules/react-vis/dist/style.css';
import { useEffect, useState } from 'react';


interface Transactions {
    id: number;
    title: string;
    amount: number;
    tipo: string;
    category: string;
    payer: string;
    createdAt: string;
}

export function VerticalBar(){
    const FlexibleXYPlot = makeWidthFlexible(XYPlot); 
    const { filterTransactions, transactions } = useTransactions();
    const [rightTransactions, setRightTransactions] = useState<Transactions[]>(transactions)

    useEffect(() => {
        if(filterTransactions.length > 0){
            setRightTransactions(filterTransactions)
        } else {
            setRightTransactions(transactions)
        }
    }, [filterTransactions, transactions])


    const VerticalBarData = rightTransactions.reduce((acc, transaction) => {
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


    if(filterTransactions.length === 0){
        return (
            <div id="error">
                <p>Selecione o mês desejado</p>
            </div>
        )
    }

    return(
        <FlexibleXYPlot
            height={400}
            xType="ordinal"
        >
            <XAxis />
            <YAxis />
            <HorizontalGridLines animation />
            <VerticalGridLines animation />

            <VerticalBarSeries barWidth={0.5} animation 
                data={[{
                    x: ``,
                    y: VerticalBarData.deposits
                }]}
                color="#33cc95"
                style={{}}
            />
            <VerticalBarSeries barWidth={0.5} animation
                data={[{
                    x: ``,
                    y: VerticalBarData.withdraws
                }]}
                color="#E52E40"
                style={{}}
            />
            <VerticalBarSeries barWidth={0.5} animation
                data={[{
                    x: ``,
                    y: VerticalBarData.total
                }]}
                color="#5429CC"
                style={{}}
            />
        </FlexibleXYPlot>
    );
}