import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {

    let history = useHistory();

    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert("Usuário logado com sucesso!")
        } catch (error) {
            alert("O usuário ou senha estão incorretos")
        }
    }

    return (
        <div className="paginalogin">
            <div className="form">
            <form onSubmit={onSubmit}>

                    <img src="https://i.imgur.com/ycjeb0X.png" alt="logo" height="90px" />

                    <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Entrar</Typography>

                    <TextField value={userLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

                    <TextField value={userLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        
                    <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant='contained'>
                            Entrar
                        </Button>
                    </Box>
                </form>
                <Box marginTop={5}>
                    
                    <Link to="/cadastrar" className='text-decorator-none'> 
                        <Typography variant='subtitle1' gutterBottom align='center' className='textoCadastro'>Clique aqui para se cadastrar.</Typography>
                    </Link>
                </Box>

            </div>
        </div>
    );
}

export default Login;