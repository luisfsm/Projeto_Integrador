import React from 'react'
import './Footer.css';
import { Typography, Box, Grid } from '@material-ui/core';
import Container from "@material-ui/core/Container"
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();

    const dispatch = useDispatch();

    var footerComponent;

    if (token !== "") {

        footerComponent =
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="text.secondary"
                color="white" className="footerTamanho"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Ajuda
                            </Box>
                            <Box>
                                <Link href="#" color="inherit" to={'#'} className='text-decorator-none' style={{ color: "white" }}>
                                    Contato
                                </Link>
                            </Box>
                            <Link href="#" color="inherit" to={'#'} className='text-decorator-none' style={{ color: "white" }}>
                                <Box>
                                    Suporte
                                </Box>
                            </Link>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Contas
                            </Box>
                            <Box>
                                <Link href="#" color="inherit" to={'#'} className='text-decorator-none' style={{ color: "white" }}>
                                    Login
                                </Link>
                            </Box>
                            <Link href="#" color="inherit" to={'#'} className='text-decorator-none' style={{ color: "white" }}>
                                <Box>
                                    Registro
                                </Box>
                            </Link>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Mensagens
                            </Box>
                            <Box>
                                <Link href="#" color="inherit" to={'#'} className='text-decorator-none' style={{ color: "white" }}>
                                    Backup
                                </Link>
                            </Box>
                            <Link href="#" color="inherit" to={'#'} className='text-decorator-none' style={{ color: "white" }}>
                                <Box>
                                    Historico
                                </Box>
                            </Link>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }}
                        pb={{ xs: 5, sm: 0 }}>
                        Projeto Haqua &copy; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>

    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;
