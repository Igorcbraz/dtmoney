import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import { toast } from 'react-toastify';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './style';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
    const { createTransaction, user } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [tipo, setTipo] = useState('deposit');
    const [payer, setPayer] = useState('');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        if(title.trim()    === '' || amount       === 0  ||
           category.trim() === '' || tipo.trim()  === '' ||
           tipo.trim()     === '' || payer.trim() === '') {
            toast.error('Todos os campos devem estar preenchidos')
            return;
        }

        await createTransaction({
            title,
            amount,
            category,
            tipo,
            payer,
            id: user.id
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setTipo('deposit');
        onRequestClose();
        setPayer('')
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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)} 
                />

                <input
                    type="number"
                    placeholder="Valor" 
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
                    placeholder="Categoria" 
                    value={category}
                    onChange={event => setCategory(event.target.value)} 
                />
                <input
                    placeholder="Pagador" 
                    value={payer}
                    onChange={event => setPayer(event.target.value)} 
                />


                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}