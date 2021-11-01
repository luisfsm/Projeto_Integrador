import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
            <Grid container>
                <Box>
                    <Box display="flex" justifyContent="center">
                        <img src="https://i.imgur.com/ycjeb0X.png" className="haquaLogo" alt="" />
                    </Box>
                    <Box className="retangulo1">
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth className="border" />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className="border" />
                    </Box>
                    <Box  className="buttom">
                        <Button type='submit' variant='contained'>
                            Entrar
                        </Button>
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='recuperarSenha'>Recuperar senha</Typography>
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='cadastrar'>Não tem uma conta? Cadastre-se!</Typography>
                    </Box>
                    <Box>
                    <Typography variant='subtitle1' gutterBottom align='center' className='projetoHaqua'>&copy; Projeto Haqua</Typography>
                    </Box>
                </Box>
            </Grid>
    );
}

export default Login;