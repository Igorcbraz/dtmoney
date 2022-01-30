import { useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { FormatPaginationTransactions } from "../../utils/FormatPaginationTransactions";

import { EditTransactionModal } from "../EditTransactionModal";
import { DeleteTransactionModal } from "../DeleteTransactionModal";

import { ReactComponent as Trash } from '../../assets/trash.svg';
import { ReactComponent as Pencil } from '../../assets/pencil.svg';
import { Container } from "./styles";
import { MonthFilter } from "../MonthFilter";

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
    const { transactions, filterTransactions, currentPage } = useTransactions();
    const [rightTransactions, setRightTransactions] = useState<Transactions[]>(transactions)

    const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] = useState(false);
    const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState(false);
    const [actionTransactionModal, setActionTransactionModal] = useState<Transactions>({} as Transactions);

    useEffect(() => {
        if(filterTransactions.length > 0){
            setRightTransactions(FormatPaginationTransactions(filterTransactions)[currentPage])
        } else {
            setRightTransactions(FormatPaginationTransactions(transactions)[currentPage])
        }
        
    }, [filterTransactions, transactions, currentPage])
    
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
            <MonthFilter/>
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
                                <button onClick={() => handleOpenEditTransactionModal(transaction)} title="Editar">
                                    <Pencil/>
                                </button>
                                <button onClick={() => handleOpenDeleteTransactionModal(transaction)} title="Excluir">
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