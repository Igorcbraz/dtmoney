import { useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

import { EditTransactionModal } from "../EditTransactionModal";
import { DeleteTransactionModal } from "../DeleteTransactionModal";

import { ReactComponent as Trash } from '../../assets/trash.svg';
import { ReactComponent as Pencil } from '../../assets/pencil.svg';
import { Container } from "./styles";

interface Transactions {
    FK_id_user?: number;
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

    const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] = useState(false);
    const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState(false);
    const [actionTransactionModal, setActionTransactionModal] = useState<Transactions>({} as Transactions);

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

    // Edit
    function handleOpenEditTransactionModal(currentlyTransaction: Transactions){
        setActionTransactionModal(currentlyTransaction);
        setIsEditTransactionModalOpen(true);
    }

    function handleCloseEditTransactionModal(){
        setIsEditTransactionModalOpen(false);
    }

    // Delete
    function handleOpenDeleteTransactionModal(currentlyTransaction: Transactions){
        setActionTransactionModal(currentlyTransaction);
        setIsDeleteTransactionModalOpen(true);
    }

    function handleCloseDeleteTransactionModal(){
        setIsDeleteTransactionModalOpen(false);
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
                        <th>Ações</th>
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
                            <td id='actions'>
                                <button onClick={() => handleOpenEditTransactionModal(transaction)}>
                                    <Pencil/>
                                </button>
                                <button onClick={() => handleOpenDeleteTransactionModal(transaction)}>
                                    <Trash/>
                                </button>
                            </td>
                        </tr>
                      );
                    })}
                </tbody>
            </table>
            
            <EditTransactionModal
                isOpen={isEditTransactionModalOpen}
                onRequestClose={handleCloseEditTransactionModal}
                transaction={actionTransactionModal}
            />
            <DeleteTransactionModal
                isOpen={isDeleteTransactionModalOpen}
                onRequestClose={handleCloseDeleteTransactionModal}
                transactionId={actionTransactionModal.id}
                userId={actionTransactionModal.FK_id_user}
            />
        </Container>
    );
}