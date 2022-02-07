import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

import logoImg from '../assets/logo.svg'
import illustration from '../assets/illustration-green.gif'
import  chartUp from '../assets/chart-up.svg'
import  phone from '../assets/phone.svg'


import { Container, Header, Content } from '../styles/landing';

export function Landing(){
    const navigate = useNavigate();

    return(
        <Container>
            <Header id='content'>
                <div>
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
                    <button type="button" id="cadastrar" onClick={() => navigate('/Cadastrar')}>
                        Cadastrar
                    </button> 
                </div>
            </Header>
            <Content>
                <div className='introduction'>
                    <h1>Simplifique o seu controle <span>financeiro</span></h1>
                    <p>A maneira mais rápida, fácil e simples de controlar seus gastos financeiros e ver métricas claras sobre seus dados</p>
                    <div>
                        <button>
                            <img src={chartUp} alt="Chart green illustration" id="chartUp"/>
                            Dados exibidos em gráficos
                        </button>
                        <button>
                            <img src={phone} alt="Cellphone green illustration" id="phone"/>
                            Utilize em qualquer lugar
                        </button>
                    </div>
                </div>
                <div className="box-shadow">
                    <img src={illustration} alt="Money illustration"/>
                </div>
            </Content>
        </Container>
    )
}