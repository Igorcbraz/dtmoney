import { Header } from "../components/Header";
import { useNavigate } from "react-router";

import { FormLogin } from '../styles/login'
import { FormEvent, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";

export function Login(){
    const { loginUser } = useTransactions();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    async function handleLogin(event: FormEvent){
        event.preventDefault();

        const response = await loginUser({
            email: email.trim(),
            pass: pass.trim()
        });

        if(response.status){
            alert('Houve algum erro ao realizar o login')
        } else {
            navigate('/')
        }
    }

    return(
        <>
            <Header label="Cadastrar" onOpenNewTransactionModal={() => navigate('/Cadastro')}/>
            <FormLogin onSubmit={handleLogin}>
                <div>
                    <h1>Para controlar seus gastos <span>Realize o Login</span></h1>
                    <label>Email</label>
                    <input 
                        type="text" placeholder="email@exemplo.com" required id="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}    
                    />

                    <label>Senha</label>
                    <input 
                        type="password" placeholder="***********" required id="pass"
                        onChange={event => setPass(event.target.value)}
                        value={pass}   
                    />

                    <button type="submit">Entrar</button>
                </div>
            </FormLogin>
        </>
    )
}