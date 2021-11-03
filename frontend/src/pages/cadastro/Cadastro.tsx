import React from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {

    return (
        <div className="cadastromenu">
            <div className="form">
                <form>

                    <img src="https://i.imgur.com/ycjeb0X.png" alt="logo" height="91px" />

                    <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Cadastrar</Typography>
                    <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField id='senhacom' label='Confirme a senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                    <Link to='/home' className='text-decorator-none'>
                        <Button type='submit' variant='contained'>
                            Cadastrar
                        </Button>
                    </Link>
                    </Box>
                </form>


            </div>
        </div>
    );
}

export default Cadastro;