import { Button, Paper, Grid, Box, Typography } from '@material-ui/core'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'

function sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3E5198" }}>
                <Grid alignItems="flex-start" item xs={6}>
                    <Box paddingX={3} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>SOBRE NÓS</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "lighter"}}> Esse Projeto nasceu do trabalho em  equipe de integrantes da 32° turma da Generation Brasil.
                            Levando em conta os tempos atuais, e a necessidade de se pensar no coletivo, criamos uma rede social para conscientizar seus usuários sobre o conceito de se pensar em saneamento básico,a importancia do acesso a água potável e a preservação do mesmo para a sociedade, levando em conta os objetivos de desenvolvimento sustentável de número 6, Água Potável e Saneamento.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/T2mcAYc.png" alt="" width="440px" height="450px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "#3E5198" }}>
                </Grid>


                <Grid justifyContent='center' container spacing={2} style={{ backgroundColor: "#3E5198" }}>

                    <Box padding='10px' margin='10px'>


                        <img src="https://imgur.com/gJMMfAY.png" alt="" width="200px" height="200px" />
                        <Box display='flex' justifyContent='center' p={2}>
                            <Button variant='contained'>
                                <Typography className="buttonLinkedin" style={{ color: "418ED7", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>
                            <Button variant='contained'>
                                <Typography  className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Github
                                </Typography>
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent='center' color='#F9F0EE'>
                            <Typography variant="h5" component="h5">Allan</Typography>
                        </Box>
                    </Box>



                    <Box padding='10px' margin='10px'>


                        <img src="https://imgur.com/gJMMfAY.png" alt="" width="200px" height="200px" />
                        <Box display='flex' justifyContent='center' p={2}>
                            <Button variant='contained'>
                                <Typography className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>
                            <Button variant='contained'>
                                <Typography  className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Github
                                </Typography>
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent='center' color='#F9F0EE'>
                            <Typography variant="h5" component="h5">Felipe</Typography>
                        </Box>
                    </Box>





                    <Box padding='10px' margin='10px' >


                        <img src="https://imgur.com/gJMMfAY.png" alt="" width="200px" height="200px" />
                        <Box display='flex' justifyContent='center' p={2}>

                            <Button variant='contained'>
                                <Typography className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>

                            <Button variant='contained'>
                                <Typography  className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Github
                                </Typography>
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent='center' color='#F9F0EE'>
                            <Typography variant="h5" component="h5">Hariel</Typography>
                        </Box>
                    </Box>




                    <Box padding='10px' margin='10px'>


                        <img src="https://imgur.com/gJMMfAY.png" alt="" width="200px" height="200px" />
                        <Box display='flex' justifyContent='center' p={2}>
                            
                            <Button variant='contained'>
                                <Typography className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>

                            <Button variant='contained'>
                                <Typography  className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Github
                                </Typography>
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent='center' color='#F9F0EE'>
                            <Typography variant="h5" component="h5">José</Typography>
                        </Box>
                    </Box>

                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}>

                </Grid>
            </Grid>

        </>
    )
}

export default sobre
