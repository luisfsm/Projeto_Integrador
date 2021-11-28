import { Button, Paper, Grid, Box, Typography } from '@material-ui/core'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import './Sobre.css'

function sobre() {
    return (
        <>

            <Grid xs={12} container>   {/* Texto sobre acima */}
                <Grid className='topSobre'>
                    <Typography variant="h3" component="h3" className='titulo'>Sobre nós</Typography>

                    <Typography variant="h5" component="h5" className='txtPrincipal'>
                        Projeto Haqua nasceu do trabalho em  equipe de integrantes da 32° turma da Generation Brasil.
                        Levando em conta os tempos atuais, e a necessidade de se pensar no coletivo, criamos uma rede social para conscientizar seus usuários a refletir sobre o conceito de  saneamento básico funcional, a importancia do acesso a água potável e a preservação do mesmo para a sociedade, levando em conta o objetivo de desenvolvimento sustentável número 6, Água Potável e Saneamento.
                    </Typography>
                </Grid>
            </Grid>



            <Grid xs={12} container className='bottomSobre'>
                <Grid xs={7} item className='txtPessoal'>  {/* Hariel */}
                    <Box>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente vel eligendi quasi eaque consequatur, officia, accusantium nulla perspiciatis esse enim, nostrum beatae dolore optio perferendis itaque molestiae doloribus consectetur.
                    </Box>
                </Grid>
                <Grid xs={3}>
                    <Box className='imgPessoal'>
                        <img className='imgPessoal2' src="https://media-exp1.licdn.com/dms/image/C5603AQEyalWjTMOjog/profile-displayphoto-shrink_800_800/0/1636500744979?e=1642636800&v=beta&t=2z2vs4Ns5E2zjTORRvNVi5Yiu8C4-QRV4wMiI13O_x0" alt="foto do Luis Hariel" />
                    </Box>
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
                </Grid>
                {/* -------------------- */}

                <Grid xs={7} item className='txtPessoal'>  {/* Felipe */}
                    <Box>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente vel eligendi quasi eaque consequatur, officia, accusantium nulla perspiciatis esse enim, nostrum beatae dolore optio perferendis itaque molestiae doloribus consectetur.
                    </Box>
                </Grid>
                <Grid xs={3}>
                    <Box className='imgPessoal'>
                        <img className='imgPessoal2' src="https://avatars.githubusercontent.com/u/42703204?v=4" alt="foto do Luis Felipe" />
                    </Box>
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
                </Grid>
                {/* -------------------- */}
                
                <Grid xs={7} item className='txtPessoal'>  {/* José */}
                    <Box>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente vel eligendi quasi eaque consequatur, officia, accusantium nulla perspiciatis esse enim, nostrum beatae dolore optio perferendis itaque molestiae doloribus consectetur.
                    </Box>
                </Grid>
                <Grid xs={3}>
                    <Box className='imgPessoal'>
                        <img className='imgPessoal2' src="https://media-exp1.licdn.com/dms/image/C4E03AQHVJVcG-g5Q6Q/profile-displayphoto-shrink_800_800/0/1629127710235?e=1642636800&v=beta&t=gTscEE816JUOeIH87UUhWdlQ9M7AtpAkoi_P3kniSVg" alt="foto do José"/>
                    </Box>
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
                </Grid>
                {/* -------------------- */}
                <Grid xs={7} item className='txtPessoal'>  {/* Alan */}
                    <Box>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente vel eligendi quasi eaque consequatur, officia, accusantium nulla perspiciatis esse enim, nostrum beatae dolore optio perferendis itaque molestiae doloribus consectetur.
                    </Box>
                </Grid>
                <Grid xs={3}>
                    <Box className='imgPessoal'>
                    <img className='imgPessoal2' src="https://media-exp1.licdn.com/dms/image/C4D03AQGEb7q2e3tA4g/profile-displayphoto-shrink_800_800/0/1637325478814?e=1642636800&v=beta&t=070nOeuKfRHAzQFMCL-Puh_iiy6G3sqA5I665h2VZ0M" alt="foto do Alan" />
                    </Box>
                    <Box className='botaoLinks'>
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
                </Grid>
                {/* -------------------- */}

            </Grid>
        </>
    )
}

export default sobre
