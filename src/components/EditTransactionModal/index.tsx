import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import { toast } from 'react-toastify';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from '../NewTransactionModal/style';

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

interface EditTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    transaction: Transactions;
}

export function EditTransactionModal({ isOpen, onRequestClose, transaction}: EditTransactionModalProps){
    const { updateTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [tipo, setTipo] = useState('');
    const [payer, setPayer] = useState('');
    
    useEffect(() => {
        setTitle(transaction.title);
        setAmount(transaction.amount)
        setCategory(transaction.category)
        setTipo(transaction.tipo);
        setPayer(transaction.payer);
    }, [transaction])

    async function handleEditTransaction(event: FormEvent){
        event.preventDefault();

        if(title.trim()    === '' || amount       === 0  ||
           category.trim() === '' || tipo.trim()  === '' ||
           tipo.trim()     === '' || payer.trim() === '') {
            toast.error('Todos os campos devem estar preenchidos')
            return;
        }

        const response = await updateTransaction({
            title,
            amount,
            category,
            tipo,
            payer,
            id: transaction.id,
            FK_id_user: transaction.FK_id_user,
            createdAt: transaction.createdAt
        })

        if(response === 1){
            onRequestClose();
            toast.success('Transação alterada com sucesso');
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

            <Container onSubmit={handleEditTransaction}>
                <h2>Alterar transação</h2>

                <input
                    placeholder={transaction.title}
                    value={title}
                    onChange={event => setTitle(event.target.value)} 
                />

                <input
                    type="number"
                    placeholder={`${transaction.amount}`}
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))} 
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setTipo('deposit')}
                        isActive={tipo === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setTipo('withdraw')}
                        isActive={tipo === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder={transaction.category}
                    value={category}
                    onChange={event => setCategory(event.target.value)} 
                />
                <input
                    placeholder={transaction.payer}
                    value={payer}
                    onChange={event => setPayer(event.target.value)} 
                />


                <button type="submit">
                    Alterar
                </button>
            </Container>
        </Modal>
    );
}