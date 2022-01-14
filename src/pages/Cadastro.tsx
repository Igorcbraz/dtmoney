import { Header } from "../components/Header";
import { useNavigate } from "react-router";

import { FormEvent, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";

import { FormLogin } from '../styles/cadastro'

export function Cadastro(){
    const { registerUser } = useTransactions();
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cPass, setCPass] = useState('')

    async function handleLogin(event: FormEvent){
        event.preventDefault();

        if(pass !== cPass){
            alert('As senhas são diferentes !')
            return;
        }

        const response = await registerUser({
            name: name,
            pass: pass,
            email: email,
        });

        if(response.status){
            alert('Houve algum erro ao realizar o cadastro')
        } else {
            navigate('/')
        }
    }

    return(
        <>
            <Header label="Login" onOpenNewTransactionModal={() => navigate('/Login')}/>
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
                    

                    <button type="submit">Cadastrar</button>
                </div>
            </FormLogin>
        </>
    )
}