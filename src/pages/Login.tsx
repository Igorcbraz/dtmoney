import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import { useTransactions } from "../hooks/useTransactions";
import { Helmet } from "react-helmet";

import { Header } from "../components/Header";
import { Loading } from "../components/Loading";

import { FormLogin } from '../styles/login';

export function Login(){
    const { loginUser } = useTransactions();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(event: FormEvent){
        event.preventDefault();
        setIsLoading(true)

        const response = await loginUser({
            email: email.trim(),
            pass: pass.trim()
        });

        if(response.status){
            toast.error('Email ou senha incorretas')
            setIsLoading(false)
        } else {
            navigate('/Home')
        }
    }

    return(
        <>
            <Helmet>
                <title>Login | Dtmoney</title>
            </Helmet>
            <Header label="Cadastrar" onOpenNewTransactionModal={() => navigate('/Cadastro')} haveHome/>
            <FormLogin onSubmit={handleLogin}>
                <div className="formDiv">
                    <h1>Para controlar seus gastos <span>Realize o Login</span></h1>
                    <label>Email</label>
                    <input 
                        type="email" placeholder="email@exemplo.com" required id="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}    
                    />

                    <div>
                        <label>Senha</label>
                        {/* <Link to='/newPassword'>Esqueci a senha</Link> */}
                    </div>
                    
                    <input 
                        type="password" placeholder="***********" required id="pass"
                        onChange={event => setPass(event.target.value)}
                        value={pass}   
                    />

                    <button type="submit">
                        {isLoading ? (
                            <Loading width={150} height={40} isWhite/>
                        ) : 'Entrar'}
                    </button>
                </div>
            </FormLogin>
        </>
    )
}