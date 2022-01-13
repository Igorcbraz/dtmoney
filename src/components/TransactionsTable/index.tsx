import { useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    tipo: string;
    category: string;
    payer: string;
    createdAt: string;
}

export function TransactionsTable(){
    const { transactions, filterTransactions, setFilterTransactions } = useTransactions();
    const [numberClicked, setNumberClicked] = useState('');
    const [rightTransactions, setRightTransactions] = useState<Transactions[]>(transactions)

    useEffect(() => {
        if(filterTransactions.length > 0){
            setRightTransactions(filterTransactions)
        } else {
            setRightTransactions(transactions)
        }
    }, [filterTransactions, transactions])
    
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
        <Container>
            <div>
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
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Pagador(a)</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {rightTransactions?.map(transaction => {
                      return (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.tipo}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(Number(transaction.amount))}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {transaction.payer}
                            </td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                      );
                    })}
                </tbody>
            </table>
        </Container>
    );
}