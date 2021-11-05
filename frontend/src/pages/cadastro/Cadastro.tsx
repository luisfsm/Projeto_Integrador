import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';


function Cadastro() {

    return (
        <>
            <Grid container xs={12} direction='row' justifyContent='center' alignItems='center' className="background-cadastro">
                <Grid item xs={4} display="flex" direction="row" className="retanguloCadastro" justifyContent="center">
                    <Box className="LogoHome" alignItems="center" flexDirection="column" >
                        <Box>
                            <img src="https://i.imgur.com/EB2HE5Q.png" alt="logo" className="logoCadastro" width="210px" height="210px" />
                        </Box>
                        <Box alignItems="center">
                            <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className="textCadastro" >Crie sua Conta</Typography>
                            <Typography variant='h5' gutterBottom color='textPrimary' component='h3' align='center' className="textCadastro" >É rápido e fácil</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8}  >
                    <Box paddingX={16} alignItems='center'>    
                        <form>
                            <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth className="inputBackGroudCadastro" />
                            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth className="inputBackGroudCadastro" />
                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth  className="inputBackGroudCadastro"/>
                            <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className="inputBackGroudCadastro" />
                            <Box marginTop={2} textAlign='center'>
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