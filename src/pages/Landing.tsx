import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { scroller, Element} from 'react-scroll'
import { Helmet } from 'react-helmet'

import logoImg from '../assets/logo.svg'
import illustration from '../assets/illustration-green.gif'
import chartUp from '../assets/chart-up.svg'
import phone from '../assets/phone.svg'
import desktopMockup from '../assets/desktop-mockup.png';
import cellphoneMockup from '../assets/cellphone-mockup.png';
import planningFinance from '../assets/illustration-chart.png';
import controlFinance from '../assets/illustration-control-finance.png';
import money from '../assets/illustration-money.png';

import { Container, Header, Introduction, SectionStyles, Features, CardContainer, Sentence } from '../styles/landing';


export function Landing(){
    const navigate = useNavigate();
    let optionsScroll = {
        duration: 150,
        delay: 0,
        smooth: true,
    }

    return(
        <Container>
            <Helmet>
                <title>Dtmoney - Controle as suas finanças</title>
            </Helmet>

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
            <Element name='features'>
                <Features>
                   <div className='container'>
                       <div className='header'>
                            <h1>Utilize recursos <span>gratuitos</span></h1>
                            <p>Entenda como o Dtmoney funciona</p>
                       </div>
                       <CardContainer>
                            <div>
                                <img src={controlFinance} alt="Control finance illustration"/>
                                <h3>Planejador de orçamentos</h3>
                                <p>Diga adeus às planilhas complexas. Adicione e atualize seus orçamentos organizados por categorias</p>
                            </div>
                            <div>
                                <img src={planningFinance} alt="Planning finance illustration"/>
                                <h3>Monitorador de crédito</h3>
                                <p>Sem contas complicadas. Tenha acesso 24/7 à suas entradas, saídas e crédito total</p>
                            </div>
                            <div>
                                <img src={money} alt="Counting money illustration"/>
                                <h3>Acompanhe seus gastos</h3>
                                <p>Não torne seu dinheiro complexo. Simplifique suas entradas e saídas, saiba para onde seu dinheiro vai e vem</p>
                            </div>
                       </CardContainer>
                   </div>
                </Features>
            </Element>
            <Element name='' id='depoiment'>
                <Sentence>
                    <h1>
                        Junte-se a nós <br/> 
                        faça parte do  <br/>
                        <span>Dtmoney</span>
                    </h1>

                    <button onClick={() => navigate('/Cadastro')}>
                        Inscreva-se
                    </button>
                </Sentence>
            </Element>
        </Container>
    )
}