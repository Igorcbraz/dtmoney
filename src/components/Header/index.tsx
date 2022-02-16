import logoImg from '../../assets/logo.svg';

import { useTransactions } from '../../hooks/useTransactions';
import { useNavigate } from "react-router";
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { slide as Menu } from 'react-burger-menu'

import { Container, Content, MenuStyles } from './styles';


interface HeaderProps{
    onOpenNewTransactionModal?: () => void;
    label?: string;
    userName?: boolean;
    haveHome?: boolean;
}

export function Header({ onOpenNewTransactionModal, label, haveHome, userName = false }: HeaderProps){
    const { width } = useWindowDimensions();
    const { user, logout } = useTransactions(); 
    const navigate = useNavigate();

    if(width >= 950) {
        // Desktop
        return (
            <Container>
                <Content id='content'>
                    <img src={logoImg} alt="dt money" title="dt money"/>
                    {userName && (
                        <div>
                            <button type="button" onClick={() => navigate('/Profile')} id="btnUser">
                                {user.customer}
                            </button>
                            <button onClick={logout} id="logout">
                                Sair
                            </button>
                        </div>
                    )}
                    
                    { haveHome && (
                        <button type="button" onClick={() => navigate('/')}>
                            Home
                        </button>  
                    )}

                    <button type="button" onClick={onOpenNewTransactionModal}>
                        {label}
                    </button>     
                </Content>
            </Container>
        )
    } else {
        // Mobile landing
        return(
            <Container>
                <Content id="content" paddingBottom="3rem">
                    <MenuStyles id="teste">
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"teste"}>
                            <img src={logoImg} alt="dt money" title="dt money" id="dtMoney"/>

                            <button className='item'>Sobre nós</button>
                            <button className='item'>Funcionalidades</button>
                            <button className='item'>Documentação</button>

                            <button type="button" id="login" onClick={() => navigate('/Login')}>
                                Entrar
                            </button>  
                            <button type="button" id="cadastrar" onClick={() => navigate('/Cadastro')}>
                                Cadastrar
                            </button> 
                        </Menu>    
                    </MenuStyles>
                    <img src={logoImg} alt="dt money" title="dt money"/>
                </Content>
            </Container>
        )
    }
}