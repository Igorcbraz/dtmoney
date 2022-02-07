import { FormEvent, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';

import { Header } from "../components/Header";

import { FormLogin } from '../styles/newPassword'

export function NewPassword(){
    const { registerUser } = useTransactions();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cPass, setCPass] = useState('')

    async function handleLogin(event: FormEvent){
        event.preventDefault();

        if(pass !== cPass){
            toast.error('As senhas não são iguais')
            return;
        }

        const response = await registerUser({
            name: name.trim(),
            pass: pass.trim(),
            email: email.trim(),
        });

        if(response.status){
            toast.error('Houve algum erro ao realizar o cadastro')
        } else {
            navigate('/')
        }
    }

    return(
        <>
            <Header label="Login" onOpenNewTransactionModal={() => navigate('/Login')}/>
            <FormLogin onSubmit={handleLogin}>
                <div>
                    <h1>Esqueceu a senha ?<span>Vamos recupera-lá</span></h1>

                    <span>
                        <label>Email</label>
                        <input
                            type="email" placeholder="example@gmail.com" required id="email"
                            onChange={event => setName(event.target.value)}
                            value={name}
                        />
                    </span>

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
                    

                    <button type="submit">Atualizar</button>
                </div>
            </FormLogin>
        </>
    )
}