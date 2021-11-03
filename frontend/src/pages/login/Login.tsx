import React from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        <div className="paginalogin">
            <div className="form">
                <form>

                    <img src="https://i.imgur.com/ycjeb0X.png" alt="logo" height="90px" />

                    <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Entrar</Typography>
                    <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                    <Link to='/home' className='text-decorator-none'>
                        <Button type='submit' variant='contained'>
                            Entrar
                        </Button>
                    </Link>
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