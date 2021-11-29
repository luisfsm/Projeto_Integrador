import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
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
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success("Usuário logado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        } catch (error) {
            toast.error("Erro ao logar- Verifique se usuário e senha estão corretos", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
    }

    return (
        <>    
            <Grid container xs={12} direction='row' justifyContent='center' alignItems='center' className="bodyLogin">
                <Grid alignItems='center' xs={4} >
                    <Box display="flex" justifyContent="center" marginTop={-2}>
                        <img src="https://i.imgur.com/FpzQD5k.png" className="haquaLogoLogin" alt="" />
                    </Box>
                    <Box>
                        <form onSubmit={onSubmit}>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth className="border" />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className="border" />
                            <Box>
                                <Typography variant='subtitle1' className="recuperarSenha" gutterBottom>Recuperar senha</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" justifyContent="center" marginTop={2}>
                                <Button type='submit' variant='contained' color="primary" >
                                    Entrar
                                </Button>
                            </Box>

                            <Link to="/cadastrar" className='text-decorator-none'>
                                <Box marginTop={2}>
                                    <Typography variant='subtitle1' gutterBottom className="cadastrar" align='center'>Não tem uma conta? Cadastre-se!</Typography>
                                </Box>
                            </Link>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;