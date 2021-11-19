import { Button, Paper, Grid, Box, Typography } from '@material-ui/core'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import './Sobre.css'

function sobre() {
    return (
        <>
            <Grid container className='container' item xs={12} > {/*Grid encapsulando texto e img principal*/}
                <Grid alignItems="flex-start" item xs={6} >   {/*texto*/}
                    <Box className='txtSobre'>
                        <Typography variant="h3" component="h3" gutterBottom >SOBRE NÓS</Typography>
                        <Typography variant="h5" component="h5" gutterBottom >
                            Esse Projeto nasceu do trabalho em  equipe de integrantes da 32° turma da Generation Brasil.
                            Levando em conta os tempos atuais, e a necessidade de se pensar no coletivo, criamos uma rede social para conscientizar seus usuários a refletir sobre o conceito de  saneamento básico funcional, a importancia do acesso a água potável e a preservação do mesmo para a sociedade, levando em conta o objetivo de desenvolvimento sustentável número 6, Água Potável e Saneamento.
                        </Typography>
                    </Box>
                </Grid >

                <Grid item xs={6} justifyContent="flex-end"> {/*img principal*/}
                    <Box className='boxSobre'>
                        <img className='imgPrincipal' src="https://imgur.com/T2mcAYc.png" alt="colaboração" />
                    </Box>
                </Grid>
            </Grid>

            <Grid container className='gridFotos'> {/*Grid encapsulando todas as fotos com botões*/}
                <Box className='fotos'> {/*box Alan*/}
                
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGEb7q2e3tA4g/profile-displayphoto-shrink_800_800/0/1637325478814?e=1642636800&v=beta&t=070nOeuKfRHAzQFMCL-Puh_iiy6G3sqA5I665h2VZ0M" alt="foto do Alan" className='imgFoto' />
                    <Box className='botaoLinks' >
                        <Button variant='contained' className='botaoLinkedin'
                            href='https://www.linkedin.com/in/alanvilasboas/ ' target='_blank'>
                            <Typography className="textoLinks">Linkedin</Typography>
                        </Button>
                        &nbsp;
                        <Button variant='contained' className='botaoGithub'
                            href='https://github.com/alanvilasboas' target='_blank'>
                            <Typography className="textoLinks">Github</Typography>
                        </Button>
                    </Box>
                    <Box display='flex' className='boxNome'>
                        <Typography variant="h5" component="h5">Allan</Typography>
                    </Box>
                </Box>

                <Box className='fotos'>{/*box Luis Felipe<*/}
                    <img src="https://media-exp1.licdn.com/dms/image/D4D35AQH2v_H3B8p7Iw/profile-framedphoto-shrink_800_800/0/1633036885763?e=1637413200&v=beta&t=ipdwgv58f-8y_avsmAbvoAXHeFPk5eykyWbkQ_JyAW4" alt="foto do Luis Felipe" className='imgFoto' />
                    <Box className='botaoLinks'>
                        <Button variant='contained' className='botaoLinkedin'
                            href='https://www.linkedin.com/in/lfsm/' target='_blank'>
                            <Typography className="textoLinks">Linkedin</Typography>
                        </Button>
                        &nbsp;
                        <Button variant='contained' className='botaoGithub'
                            href='https://github.com/luisfsm' target='_blank'>
                            <Typography className="textoLinks">Github</Typography>
                        </Button>
                    </Box>
                    <Box display='flex' className='boxNome'>
                        <Typography variant="h5" component="h5">Luis Felipe</Typography>
                    </Box>
                </Box>

                <Box className='fotos'>{/*box Luis Hariel*/}
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEyalWjTMOjog/profile-displayphoto-shrink_800_800/0/1636500744979?e=1642636800&v=beta&t=2z2vs4Ns5E2zjTORRvNVi5Yiu8C4-QRV4wMiI13O_x0" alt="foto do Luis Hariel" className='imgFoto' />
                    <Box className='botaoLinks'>
                        <Button variant='contained' className='botaoLinkedin'
                            href='https://www.linkedin.com/in/luis-hariel-8152281b7' target='_blank'>
                            <Typography className="textoLinks">Linkedin</Typography>
                        </Button>
                        &nbsp;
                        <Button variant='contained' className='botaoGithub'
                            href='https://github.com/Luis2k21' target='_blank'>
                            <Typography className="textoLinks">
                                Github
                            </Typography>
                        </Button>
                    </Box>
                    <Box display='flex' className='boxNome'>
                        <Typography variant="h5" component="h5">Luis Hariel</Typography>
                    </Box>
                </Box>

                <Box className='fotos'>{/*box José*/}
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHVJVcG-g5Q6Q/profile-displayphoto-shrink_800_800/0/1629127710235?e=1642636800&v=beta&t=gTscEE816JUOeIH87UUhWdlQ9M7AtpAkoi_P3kniSVg" alt="foto do José" className='imgFoto' />
                    <Box className='botaoLinks'>

                        <Button variant='contained' className='botaoLinkedin'
                            href='https://www.linkedin.com/in/jos%C3%A9-roberto-n%C3%B3brega-vieira-b5718b176/' target='_blank'>
                            <Typography className="textoLinks">Linkedin</Typography>
                        </Button>
                        &nbsp;
                        <Button variant='contained' className='botaoGithub'
                            href='https://github.com/JoseRobertoNVieira' target='_blank'>
                            <Typography className="textoLinks">Github</Typography>
                        </Button>
                    </Box>
                    <Box display='flex' className='boxNome'>
                        <Typography variant="h5" component="h5">José</Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default sobre