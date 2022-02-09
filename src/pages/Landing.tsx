import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { scroller, Element} from 'react-scroll'

import logoImg from '../assets/logo.svg'
import illustration from '../assets/illustration-green.gif'
import  chartUp from '../assets/chart-up.svg'
import  phone from '../assets/phone.svg'
import desktopMockup from '../assets/desktop-mockup.png';
import cellphoneMockup from '../assets/cellphone-mockup.png';
import userPhoto from '../assets/user.svg';

import { Container, Header, Introduction, SectionStyles, Depoiment } from '../styles/landing';


export function Landing(){
    const navigate = useNavigate();
    let optionsScroll = {
        duration: 150,
        delay: 0,
        smooth: true,
    }

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
                    <Link to='dashboard'>
                        <button type="button" id="login" onClick={() => navigate('/Login')}>
                            Entrar
                        </button>  
                    </Link>
                    <button type="button" id="cadastrar" onClick={() => navigate('/Cadastro')}>
                        Cadastrar
                    </button> 
                </div>
            </Header>
            <Introduction>
                <div className='introduction'>
                    <h1>Simplifique o seu controle <span>financeiro</span></h1>
                    <p>A maneira mais rápida, fácil e simples de controlar seus gastos financeiros e ver métricas claras sobre seus dados</p>
                    <div>
                        <button onClick={() => scroller.scrollTo('dashboard', optionsScroll)}>
                            <img src={chartUp} alt="Chart green illustration" id="chartUp"/>
                            Dados exibidos em gráficos
                        </button>
                        <button onClick={() => scroller.scrollTo('mobile', optionsScroll)}>
                            <img src={phone} alt="Cellphone green illustration" id="phone"/>
                            Utilize em qualquer lugar
                        </button>
                    </div>
                </div>
                <div className="illustration">
                    <img src={illustration} alt="Money illustration"/>
                </div>
            </Introduction>
            <Element name='dashboard'>
                <SectionStyles>
                    <div>
                        <img src={desktopMockup} alt="Desktop image" />
                    </div>
                    <div className='container'>
                        <span>01</span>
                        <h1>Dashboard.</h1>
                        <p>Adicione, edite, exclua e veja todas as suas transações no dashboard da sua conta</p>
                        <div>
                            <button onClick={() => navigate('/Cadastro')}>
                                Acessar
                            </button>
                            <button className='outline'>
                            Saiba mais
                            </button>
                        </div>
                    </div>
                </SectionStyles>
            </Element>
            <Element name='mobile'>
                <SectionStyles>
                    <div className='container'>
                        <span>02</span>
                        <h1>Mobile.</h1>
                        <p>Controle seus gastos em qualquer lugar, com qualquer dispositivo</p>
                        <div>
                            <button onClick={() => navigate('/Cadastro')}>
                                Acessar
                            </button>
                            <button className='outline'>
                            Saiba mais
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={cellphoneMockup} alt="Desktop image" id="cellphone"/>
                    </div>
                </SectionStyles>
            </Element>
            <Element name='' id='depoiment'>
                <Depoiment>
                    
                </Depoiment>
            </Element>
        </Container>
    )
}