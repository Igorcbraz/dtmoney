import logoImg from '../../assets/logo.svg';

import { useTransactions } from '../../hooks/useTransactions';
import { useNavigate } from "react-router";
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

import { Container, Content, MenuStyles, LandingHeader } from './styles';


interface HeaderProps{
    onOpenNewTransactionModal?: () => void;
    label?: string;
    userName?: boolean;
    haveHome?: boolean;
    isLanding?: boolean;
}

export function Header({ onOpenNewTransactionModal, label, haveHome, userName = false, isLanding = false }: HeaderProps){
    const { width } = useWindowDimensions();
    const { user, logout } = useTransactions(); 
    const navigate = useNavigate();

    if(width >= 680) {
        if(isLanding){
            // Desktop Landing
            return(
                <LandingHeader>
                    <div className='headerItem'>
                        <img src={logoImg} alt="dt money" title="dt money"/>
                        <ul>
                            <li><Link to='/'>Sobre nós</Link></li>
                            <li><Link to='/'>Funcionalidades</Link></li>
                            <li><Link to='/'>Documentação</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <button type="button" id="login" onClick={() => navigate('/Login')}>
                            Entrar
                        </button>  
                        <button type="button" id="cadastrar" onClick={() => navigate('/Cadastro')}>
                            Cadastrar
                        </button> 
                    </div>
                </LandingHeader>
            )
        } else {
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
        }
    } else {
        if(isLanding){
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
        } else {
            // Mobile
            return (
                <Container>
                    <Content id="content">
                        <MenuStyles id="teste">
                            <Menu pageWrapId={"page-wrap"} outerContainerId={"teste"}>
                                <img src={logoImg} alt="dt money" title="dt money" id="dtMoney"/>
                                {userName && (
                                    <button type="button" onClick={() => navigate('/Profile')}>
                                        Meu perfil e Gráficos
                                    </button>
                                )}

                                { haveHome && (
                                    <button type="button" onClick={() => navigate('/')}>
                                        Home
                                    </button>  
                                )}

                                <button type="button" onClick={onOpenNewTransactionModal}>
                                    {label}
                                </button>
                                <button onClick={logout} id="logout">
                                    Sair
                                </button>
                            </Menu>    
                        </MenuStyles>
                        <img src={logoImg} alt="dt money" title="dt money"/>
                    </Content>
                </Container>
            )
        }
    }
}