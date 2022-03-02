import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import logoImg from '../../../assets/logo.svg';

import { LandingHeader } from "../style";


export function HeaderDesktop(){
    const navigate = useNavigate();

    return (
        <LandingHeader>
            <div className='headerItem'>
                <img src={logoImg} alt="dt money" title="dt money"/>
                <ul>
                    <li><Link to='/'>Sobre nós</Link></li>
                    <li><Link to='/'>Ajuda</Link></li>
                    <li><Link to='/Docs'>Documentação</Link></li>
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
}