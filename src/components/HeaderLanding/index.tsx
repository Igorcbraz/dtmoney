import logoImg from '../../assets/logo.svg';

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

import { LandingHeader } from './style';
import { Container, Content, MenuStyles } from '../Header/styles';


export function HeaderLanding(){
    const { width } = useWindowDimensions();
    const navigate = useNavigate();

    if(width >= 950) {
        // Desktop Landing
        return (
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