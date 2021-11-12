import { Button, Paper, Grid, Box, Typography } from '@material-ui/core'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import './Sobre.css'

function sobre() {
    return (
        <>
<br /><br /><br />
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#0a3753" }} item xs={12} >
                <Grid alignItems="flex-start" item xs={6} >
                    <Box paddingX={6}>

                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>SOBRE NÓS</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="justify" style={{ color: "white", fontWeight: "lighter"}}> Esse Projeto nasceu do trabalho em  equipe de integrantes da 32° turma da Generation Brasil.
                            Levando em conta os tempos atuais, e a necessidade de se pensar no coletivo, criamos uma rede social para conscientizar seus usuários a refletir sobre o conceito de  saneamento básico funcional, a importancia do acesso a água potável e a preservação do mesmo para a sociedade, levando em conta o objetivo de desenvolvimento sustentável número 6, Água Potável e Saneamento.</Typography>
                    </Box>

                </Grid >
                <Grid item xs={6} justifyContent="flex-end">
                    <Box padding={5} className='imgSobre'>
                        <img src="https://imgur.com/T2mcAYc.png" alt="" width="440px" height="450px" />
                    </Box>
                </Grid>

                


                <Grid justifyContent='center' container spacing={0} style={{ backgroundColor: "#0d4161" }}>

                    <Box padding='10px' margin='10px' >


                        <img src="https://imgur.com/gJMMfAY.png" alt="" width="200px" height="200px" />
                        <Box display='flex' justifyContent='center' p={2} >
                            <Button variant='contained' className='lbotao' >
                                <Typography className="txtLinkedin" style={{ color: "418ED7", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>
                            &nbsp;
                            <Button variant='contained' className='gbotao'>
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
                            <Button variant='contained' className='lbotao'>
                                <Typography className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>
                            &nbsp;
                            <Button variant='contained' className='gbotao' >
                                <Typography  className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Github
                                </Typography>
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent='center' color='#F9F0EE'>
                            <Typography variant="h5" component="h5">Felipe</Typography>
                        </Box>
                    </Box>





                    <Box padding='10px' margin='10px'>


                        <img src="https://imgur.com/gJMMfAY.png" alt="" width="200px" height="200px" />
                        <Box display='flex' justifyContent='center' p={2}>

                            <Button variant='contained' className='lbotao'>
                                <Typography className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>
                            &nbsp;
                            <Button variant='contained' className='gbotao'>
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
                            
                            <Button variant='contained' className='lbotao'>
                                <Typography className="buttonLinkedin" style={{ color: "4F4F4F", fontSize: "90%", fontWeight: 600 }}>
                                    Linkedin
                                </Typography>
                            </Button>
                            &nbsp;
                            <Button variant='contained' className='gbotao'>
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