import React, {useState,useEffect,ChangeEvent} from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { useHistory } from 'react-router-dom';

function Cadastro() {

    let history = useHistory();

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
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <div className="cadastromenu">
            <div className="form">
                <form onSubmit={onSubmit}>

                    <img src="https://i.imgur.com/ycjeb0X.png" alt="logo" height="91px" />

                    <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Cadastrar</Typography>
                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirme a senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                    
                        <Button type='submit' variant='contained'>
                            Cadastrar
                        </Button>
                    
                    </Box>
                </form>


            </div>
        </div>
    );
}

export default Cadastro;