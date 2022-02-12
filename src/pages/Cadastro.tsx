import { FormEvent, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

import { Header } from "../components/Header";

import { FormLogin } from '../styles/cadastro'
import { Loading } from "../components/Loading";

export function Cadastro(){
    const { registerUser } = useTransactions();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cPass, setCPass] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(event: FormEvent){
        event.preventDefault();
        setIsLoading(true)

        if(pass !== cPass){
            toast.error('As senhas não são iguais')
            setIsLoading(false)
            return;
        }

        const response = await registerUser({
            name: name.trim(),
            pass: pass.trim(),
            email: email.trim(),
        });

        if(response.status){
            toast.error('Houve algum erro ao realizar o cadastro')
            setIsLoading(false);
        } else {
            navigate('/Home')
        }
    }

    return(
        <>
            <Helmet>
                <title>Cadastro | Dtmoney</title>
            </Helmet>
            
            <Header label="Login" onOpenNewTransactionModal={() => navigate('/Login')} haveHome/>
            <FormLogin onSubmit={handleLogin}>
                <div>
                    <h1>Para controlar seus gastos <span>Realize o Cadastro</span></h1>

                    <div>
                        <span>
                            <label>Nome Completo</label>
                            <input
                                type="text" placeholder="João da silva" required id="name"
                                onChange={event => setName(event.target.value)}
                                value={name}
                            />
                        </span>

                        <span>
                            <label>Email</label>
                            <input
                                type="text" placeholder="email@exemplo.com" required id="email"
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                            />
                        </span>
                    </div>
                    
                    <div>
                        <span>
                            <label>Senha</label>
                            <input
                                type="password" placeholder="***********" required id="pass"
                                onChange={event => setPass(event.target.value)}
                                value={pass}
                            />
                        </span>

                        <span>
                            <label>Confirmar Senha</label>
                            <input
                                type="password" placeholder="***********" required id="pass"
                                onChange={event => setCPass(event.target.value)}
                                value={cPass}
                            />
                        </span>
                    </div>
                    

                    <button type="submit">
                        {isLoading ? (
                            <Loading width={150} height={40} isWhite/>
                        ) : 'Cadastrar'}
                    </button>
                </div>
            </FormLogin>
        </>
    )
}