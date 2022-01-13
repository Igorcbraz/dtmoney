import logoImg from '../../assets/logo.svg';

import { useTransactions } from '../../hooks/useTransactions';
import { useNavigate } from "react-router";

import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactionModal?: () => void;
    label: string;
}


export function Header({ onOpenNewTransactionModal, label }: HeaderProps){
    const { user } = useTransactions(); 
    const navigate = useNavigate();

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" title="dt money"/>
                {user.customer && (
                    <button type="button" onClick={() => navigate('/Profile')}>{user.customer}</button>
                )}
                <button type="button" onClick={onOpenNewTransactionModal}>
                    {label}
                </button>               
            </Content>
        </Container>
    )
}