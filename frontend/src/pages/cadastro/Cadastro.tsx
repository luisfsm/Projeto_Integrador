import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {

    return (
        <div>
            <Grid container>
                <Grid xs={6} className="retanguloLogo">
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <img src="https://i.imgur.com/ycjeb0X.png" className="haquaLogo" alt="" />
                    </Box>
                </Grid>
                <Grid xs={8}>
                    <Box className="retangulo4">
                        <Box>
                            <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' className="border label" />
                        </Box>
                        <Box>
                            <TextField id='email' label='Email' variant='outlined' name='email' margin='normal'  className="border label" />
                        </Box>
                        <Box>
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' className="border label" />
                        </Box>
                        <Box>
                            <TextField id='confirmarSenha' label='Confirmar senha' variant='outlined' name='senha' margin='normal' type='password' className="border label" />
                        </Box>
                    </Box>
                    <Box className="buttom">
                        <Button type='submit' variant='contained'>
                            Entrar
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cadastro;