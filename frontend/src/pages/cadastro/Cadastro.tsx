import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

function Cadastro() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const emailRegex = /\S+@\S+\.\S+/
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }



    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        let validarEmail = emailRegex.test(user.usuario)

        if (validarEmail == null || validarEmail == false) {

            console.log(emailRegex.test(user.usuario))

            toast.error("Entre com um email válido.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })

        } else {
            if (confirmarSenha == user.senha) {
                cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                dispatch(addToken(token))
                toast.success("Usuário cadastrado com sucesso", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                })

                history.push("/login")
            } else {
                toast.error("Dados inconsistentes. Favor verificar as informações de cadastro.", {
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
    }

    function validaemail(){
        let usuario = document.querySelector("#usuario")

        
    }

    return (
        <>
            <Grid container xs={12} direction='row' justifyContent='center' alignItems='center' className="background-cadastro">

                <Grid item xs={4} direction="row" className="retanguloCadastro" justifyContent="center">
                    <Box alignItems="center" flexDirection="column" >
                        <Box className='left-margin-cadastro logoHome'>
                            <img src="https://i.imgur.com/FpzQD5k.png" alt="logo" className="logoCadastro" width="210px" height="210px" />
                        </Box>

                        <Box alignItems="center">
                            <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className="textCadastro" >Crie sua Conta</Typography>
                            <Typography variant='h5' gutterBottom color='textPrimary' component='h3' align='center' className="textCadastro" >É rápido e fácil</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={8}>
                    <Box paddingX={16} alignItems='center'>
                        <form onSubmit={onSubmit}>
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' className="inputBackGroudCadastro" fullWidth />

                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' className="inputBackGroudCadastro" type="email" fullWidth />

                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' className="inputBackGroudCadastro" fullWidth />

                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirme a senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' className="inputBackGroudCadastro" fullWidth />

                            <Box marginTop={2} textAlign='center'>

                                <Link to="/login" className='text-decorator-none'>
                                    <Button type='submit' className='text-decorator-none margin-right-cadastro' variant='contained' color='primary'>
                                        Cancelar
                                    </Button>
                                </Link>

                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Cadastro;