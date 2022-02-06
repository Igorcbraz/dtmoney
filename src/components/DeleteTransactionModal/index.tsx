import { FormEvent } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import Trash from '../../assets/trash.svg';

import { Container } from './style';


interface DeleteTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    transactionId: number;
    userId?: number;
}

export function DeleteTransactionModal({ isOpen, onRequestClose, transactionId, userId}: DeleteTransactionModalProps){
    const { deleteTransaction } = useTransactions();
    
    async function handleDeleteTransaction(event: FormEvent){
        event.preventDefault();

        const response = await deleteTransaction(transactionId, userId)

        if(response === 1){
            onRequestClose();
            toast.success('Transação excluída com sucesso');
        }
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>

            <Container onSubmit={handleDeleteTransaction}>
                <img src={Trash} alt="Excluir transação"/>
                <h2>Excluir Transação</h2>
                <p>Tem certeza que você deseja excluir esta transação?</p>

                <div>
                    <button type="button" onClick={onRequestClose}>
                        Voltar
                    </button>
                    <button type="submit">
                        Sim, Excluir
                    </button>
                </div>
            </Container>
        </Modal>
    );
}