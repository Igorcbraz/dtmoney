import { slide as Menu } from 'react-burger-menu'
import { useNavigate } from 'react-router';


import logoImg from '../../../assets/logo.svg';

import { Container, Content, MenuStyles } from "../../Header/styles";

export function HeaderMobile(){
    const navigate = useNavigate();

    return(
        <Container>
            <Content id="content" paddingBottom="3rem">
                <MenuStyles id="teste">
                    <Menu pageWrapId={"page-wrap"} outerContainerId={"teste"}>
                        <img src={logoImg} alt="dt money" title="dt money" id="dtMoney"/>

                        <button className='item'>Sobre nós</button>
                        <button className='item'>Ajuda</button>
                        <button className='item' onClick={() => navigate('/Docs')}>
                            Documentação
                        </button>

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

