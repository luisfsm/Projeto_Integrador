import { Button, Paper, Grid, Box, Typography } from '@material-ui/core'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import './Sobre.css'

function sobre() {
    return (
        <>

            <Grid xs={12} container >   {/* Texto sobre acima */}
                <Grid className='topSobre'>
                    <Typography variant="h3" component="h3" className='titulo'>Sobre nós</Typography>

                    <Typography variant="h5" component="h5" className='txtPrincipal'>
                        Projeto Haqua nasceu do trabalho em  equipe de integrantes da 32° turma da Generation Brasil.
                        Levando em conta os tempos atuais, e a necessidade de se pensar no coletivo, criamos uma rede social para conscientizar seus usuários a refletir sobre o conceito de  saneamento básico funcional, a importancia do acesso a água potável e a preservação do mesmo para a sociedade, levando em conta o objetivo de desenvolvimento sustentável número 6, Água Potável e Saneamento.
                    </Typography>
                </Grid>
            </Grid>

            <Grid xs={12} container className='bottomSobre'> 
                <Grid xs={10} item container className='Mvv'> {/*missão*/}
                    <Grid xs={5} item>
                        <Box className='imgMvv'>
                            <img className='imgMvv2' src="https://i.imgur.com/tUJVOAp.png" alt="imagem missão" />
                        </Box>
                    </Grid>

                    <Grid xs={5} item className='txtMvv'>

                        <Box>
                            <Box className='tituloMvv'>
                                MISSÃO
                            </Box>
                            Promover soluções de saneamento e conscientização dos usuários sobre a importancia dos ojetivos de Desenvolvimento Sustentável.
                        </Box>
                    </Grid>
                </Grid>



                <Grid xs={10} item container className='Mvv2'>
                    <Grid xs={5} item className='txtMvv'>  {/*visão*/}

                        <Box>
                            <Box className='tituloMvv'>
                                VISÃO
                            </Box>
                            Visamos conectar pessoas, fazer um mundo mais próximo e unido, onde podemos pensar em conjunto e criar soluções inovadoras para os desafios e dificuldades do mundo moderno.
                        </Box>
                    </Grid>

                    <Grid xs={5} item>
                        <Box className='imgMv'>
                            <img className='imgMvv3' src="https://i.imgur.com/TJUHnml.png" alt="imagem missão" />
                        </Box>
                    </Grid>

                </Grid>

                <Grid xs={10} item container className='Mvv'>
                    <Grid xs={5} item>
                        <Box className='imgMvv'>
                            <img className='imgMvv2' src="https://i.imgur.com/5HJGkMm.png" alt="imagem missão" />
                        </Box>
                    </Grid>

                    <Grid xs={5} item className='txtMvv'>  {/*valores*/}

                        <Box>
                            <Box className='valores'>
                                VALORES
                            </Box >
                            <ul>
                                <li>Responsabilidade social</li>
                                <li> Tecnologia sustentável</li>
                                <li>Cooperação</li>
                            </ul>

                        </Box>
                    </Grid>
                </Grid>

               {/* -------------------- */}
                <Grid xs={6} item className='txtPessoal'>  {/* Hariel */}
                    <Box className='txtPessoal2'>
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

                <Grid xs={6} item className='txtPessoal'>  {/* Felipe */}
                    <Box className='txtPessoal2'>
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

                <Grid xs={6} item className='txtPessoal'>  {/* José */}
                    <Box className='txtPessoal2'>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente vel eligendi quasi eaque consequatur, officia, accusantium nulla perspiciatis esse enim, nostrum beatae dolore optio perferendis itaque molestiae doloribus consectetur.
                    </Box>
                </Grid>
                <Grid xs={3}>
                    <Box className='imgPessoal'>
                        <img className='imgPessoal2' src="https://media-exp1.licdn.com/dms/image/C4E03AQHVJVcG-g5Q6Q/profile-displayphoto-shrink_800_800/0/1629127710235?e=1642636800&v=beta&t=gTscEE816JUOeIH87UUhWdlQ9M7AtpAkoi_P3kniSVg" alt="foto do José" />
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
                <Grid xs={6} item className='txtPessoal'>  {/* Alan */}
                    <Box className='txtPessoal2'>
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
