import logoImg from '../../assets/logo.svg';

import { useTransactions } from '../../hooks/useTransactions';
import { useNavigate } from "react-router";

import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactionModal?: () => void;
    label: string;
    userName?: boolean
}


export function Header({ onOpenNewTransactionModal, label, userName = false }: HeaderProps){
    const { user, logout } = useTransactions(); 
    const navigate = useNavigate();

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" title="dt money"/>
                {userName && (
                    <button type="button" onClick={() => navigate('/Profile')} id="btnUser">
                        {user.customer}
                    </button>
                )}
                <button type="button" onClick={onOpenNewTransactionModal}>
                    {label}
                </button>               
            </Content>
        </Container>
    )
}