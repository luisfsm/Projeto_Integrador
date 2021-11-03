import { Button, Paper, Grid, Box, Typography } from '@material-ui/core'
import React from 'react'

function sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#F4F6F6" }}>
                <Grid alignItems="flex-start" item xs={6}>
                    <Box paddingX={3} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#2F4D9B", fontWeight: "bold" }}>SOBRE NÓS</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#2F4D9B", fontWeight: "lighter" }}> Esse Projeto nasceu do trabalho em     equipe de integrantes da 32° turma da Generation Brasil.
                            Levanto em conta os tempos atuais, e a necessidade de se pensar no coletivo, criamos uma rede social para conscientizar seus usuários sobre o conceito de se pensar em saneamento básico,a importancia do acesso a água potável e a preservação do mesmo para a sociedade, levando em conta os objetivos de desenvolvimento sustentável de número 6, Água Potável e Saneamento.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/T2mcAYc.png" alt="" width="440px" height="450px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>



                <Grid container spacing={2} style={{ backgroundColor: "#F4F6F6" }}>
                    <Paper >
                        <Box>

                            <Box display='flex' justifyContent='center' color='#2456C0'>
                                <Typography variant="h4" component="h4">Allan</Typography>
                            </Box>
                            <img src="https://imgur.com/dURXkVv.png" alt="" width="200px" height="200px" />
                            <Box display='flex' justifyContent='center' p={2}>
                                <Button color='primary'>Linkedin</Button>
                                <Button>Github</Button>
                            </Box>
                        </Box>
                    </Paper>

                    <Paper>
                        <Box>

                            <Box display='flex' justifyContent='center' color='#2456C0'>
                                <Typography variant="h4" component="h4">Felipe</Typography>
                            </Box>
                            <img src="https://imgur.com/gfNtrR5.png" alt="" width="200px" height="200px" />
                            <Box display='flex' justifyContent='center' p={2}>
                                <Button color='primary'>Linkedin</Button>
                                <Button>Github</Button>
                            </Box>
                        </Box>
                    </Paper>



                    <Paper>
                        <Box>

                            <Box display='flex' justifyContent='center' color='#2456C0'>
                                <Typography variant="h4" component="h4">Hariel</Typography>
                            </Box>
                            <img src="https://imgur.com/iJYksQL.png" alt="" width="200px" height="200px" />
                            <Box display='flex' justifyContent='center' p={2}>
                                <Button color='primary'>Linkedin</Button>
                                <Button>Github</Button>
                            </Box>
                        </Box>
                    </Paper>


                    <Paper>
                        <Box>

                            <Box display='flex' justifyContent='center' color='#2456C0'>
                                <Typography variant="h4" component="h4">José</Typography>
                            </Box>
                            <img src="https://imgur.com/aVNsa8k.png" alt="" width="200px" height="200px" />
                            <Box display='flex' justifyContent='center' p={2}>
                                <Button color='primary'>Linkedin</Button>
                                <Button>Github</Button>
                            </Box>
                        </Box>
                    </Paper>


                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}>

                </Grid>
            </Grid>

        </>
    )
}

export default sobre
