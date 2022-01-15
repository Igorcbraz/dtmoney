import {
    XYPlot,
    VerticalBarSeries,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis
} from 'react-vis';
import { useTransactions } from '../../hooks/useTransactions';

import '../../../node_modules/react-vis/dist/style.css';


interface GraphicsProps{
    whichGraphic: 'deposits/withdraws' | 'graphic2';
}

export function Graphics({ whichGraphic } : GraphicsProps){
    const { transactions } = useTransactions();

    const deposits  = transactions.filter(transaction => transaction.tipo === 'deposit')
    const withdraws = transactions.filter(transaction => transaction.tipo === 'withdraw')
    
    const dataDeposits = deposits.map((deposit, index) => {
        return {
            x: `${new Intl.DateTimeFormat('pt-BR').format(new Date(deposit.createdAt))}`,
            y: deposit.amount
        }
    })

    const dataWithdraws = withdraws.map((withdraw, index) => {
        return {
            x: `${new Intl.DateTimeFormat('pt-BR').format(new Date(withdraw.createdAt))}`,
            y: withdraw.amount
        }
    })

    switch (whichGraphic) {
        case 'deposits/withdraws':
            if(transactions.length === 0){
                return (
                    <div id="error">
                        <p>Adicione transações para ver os gráficos</p>
                    </div>
                )
            }

            return(
                <>
                    <XYPlot 
                        width={500} height={300}
                        xType="ordinal"
                    >
                        <XAxis />
                        <YAxis />
                        <HorizontalGridLines />
                        <VerticalGridLines/>
                        <VerticalBarSeries barWidth={0.5}
                            data={dataDeposits}
                            color="#33cc95"
                            style={{}}
                        />
                        <VerticalBarSeries barWidth={0.5}
                            data={dataWithdraws}
                            color="#E52E40"
                            style={{}}
                        />
                    </XYPlot>
                </>
            );
        case 'graphic2':
            return(
                <h1></h1>
            );
    }
    
}