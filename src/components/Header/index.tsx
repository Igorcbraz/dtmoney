import logoImg from '../../assets/logo.svg';

import { useTransactions } from '../../hooks/useTransactions';
import { useNavigate } from "react-router";
import { slide as Menu } from 'react-burger-menu'

import { Container, Content, MenuStyles } from './styles';

interface HeaderProps{
    onOpenNewTransactionModal?: () => void;
    label: string;
    userName?: boolean
}


export function Header({ onOpenNewTransactionModal, label, userName = false }: HeaderProps){
    const { user, logout } = useTransactions(); 
    const navigate = useNavigate();

    if(window.innerWidth >= 530) {
        return (
            <Container>
                <Content id='content'>
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
    } else {
        return (
            <Container>
                <Content id="content">
                    <MenuStyles id="teste">
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"teste"}>
                            <img src={logoImg} alt="dt money" title="dt money" id="dtMoney"/>
                            {userName && (
                                <button type="button" onClick={() => navigate('/Profile')} id="btnUser">
                                    Meu perfil e Gráficos
                                </button>
                            )}
                            <button type="button" onClick={onOpenNewTransactionModal}>
                                {label}
                            </button>
                        </Menu>    
                    </MenuStyles>
                    <img src={logoImg} alt="dt money" title="dt money"/>
                </Content>
            </Container>
        )
    }
}