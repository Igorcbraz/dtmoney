import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

import { MonthFilterStyles } from "./style";

export function MonthFilter(){
    const { transactions, setFilterTransactions } = useTransactions();
    const [numberClicked, setNumberClicked] = useState('');

    function monthFilter(month: string){
        if(numberClicked !== month){
            const filterTransactions = transactions.filter(transaction => transaction.createdAt.split('-')[1] === month);

            if(filterTransactions.length === 0){
                alert('Não existem registros no mês selecionado')
                return;
            }

            setFilterTransactions(filterTransactions);
            setNumberClicked(month);
        } else {
            setFilterTransactions([]);
            setNumberClicked('0')
        }
    }

    return(
        <MonthFilterStyles>
            <button onClick={() => monthFilter('01')} className={numberClicked === '01' ? 'clicked' : ''}>Janeiro</button>
            <button onClick={() => monthFilter('02')} className={numberClicked === '02' ? 'clicked' : ''}>Fevereiro</button>
            <button onClick={() => monthFilter('03')} className={numberClicked === '03' ? 'clicked' : ''}>Março</button>
            <button onClick={() => monthFilter('04')} className={numberClicked === '04' ? 'clicked' : ''}>Abril</button>
            <button onClick={() => monthFilter('05')} className={numberClicked === '05' ? 'clicked' : ''}>Maio</button>
            <button onClick={() => monthFilter('06')} className={numberClicked === '06' ? 'clicked' : ''}>Junho</button>
            <button onClick={() => monthFilter('07')} className={numberClicked === '07' ? 'clicked' : ''}>Julho</button>
            <button onClick={() => monthFilter('08')} className={numberClicked === '08' ? 'clicked' : ''}>Agosto</button>
            <button onClick={() => monthFilter('09')} className={numberClicked === '09' ? 'clicked' : ''}>Setembro</button>
            <button onClick={() => monthFilter('10')} className={numberClicked === '10' ? 'clicked' : ''}>Outubro</button>
            <button onClick={() => monthFilter('11')} className={numberClicked === '11' ? 'clicked' : ''}>Novembro</button>
            <button onClick={() => monthFilter('12')} className={numberClicked === '12' ? 'clicked' : ''}>Dezembro</button>
        </MonthFilterStyles>
    )
}