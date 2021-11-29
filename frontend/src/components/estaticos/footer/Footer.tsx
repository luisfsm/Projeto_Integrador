import React from 'react'
import './Footer.css';
import {Typography, Box, Grid } from '@material-ui/core';
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"

function Footer() {
    return (
        <>
             <footer>
                 <Box 
                 px={{ xs: 3, sm: 10}} 
                 py={{ xs: 5, sm: 10}} 
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
                                    <Link href="#" color="inherit">
                                        Contato
                                    </Link>
                                </Box>
                                <Link href="#" color="inherit">
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
                                    <Link href="#" color="inherit">
                                        Login
                                    </Link>
                                </Box>
                                <Link href="#" color="inherit">
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
                                    <Link href="#" color="inherit">
                                        Backup
                                    </Link>
                                </Box>
                                <Link href="#" color="inherit">
                                    <Box>
                                        Historico
                                    </Box>
                                </Link>
                            </Grid>
                        </Grid>
                        <Box textAlign="center" pt={{xs: 5, sm: 10}}
                        pb={{xs: 5, sm: 0}}>
                            Projeto Haqua &copy; {new Date().getFullYear()}
                        </Box>
                     </Container>
                 </Box>
             </footer>
        </>
    )
}

export default Footer;
