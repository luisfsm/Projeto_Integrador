import { Button, Paper, Grid, Box, Typography } from '@material-ui/core'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import './Sobre.css'

function sobre() {
    return (
        <>
            <Grid xs={12} container >
                <Grid className='topSobre'>
                    <Typography variant="h3" component="h3" className='titulo'>SOBRE NÓS</Typography>

                    <Typography variant="h5" component="h5" className='txtPrincipal'>
                        Esse Projeto nasceu do trabalho em  equipe de integrantes da 32° turma da Generation Brasil.
                        Levando em conta os tempos atuais, e a necessidade de se pensar no coletivo, criamos uma rede social para conscientizar seus usuários a refletir sobre o conceito de  saneamento básico funcional, a importancia do acesso a água potável e a preservação do mesmo para a sociedade, levando em conta o objetivo de desenvolvimento sustentável número 6, Água Potável e Saneamento.
                    </Typography>
                </Grid>
            </Grid>

            <Grid xs={12} container >

                <Grid xs={6} item className='txtPessoal'>
                    <Box>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente vel eligendi quasi eaque consequatur, officia, accusantium nulla perspiciatis esse enim, nostrum beatae dolore optio perferendis itaque molestiae doloribus consectetur.
                    </Box>
                </Grid>


                <Grid xs={6}>
                    <Box className='imgPessoal'>
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2021/08/pato-de-estimacao.jpg" alt="" width="400px" />
                    </Box>
                </Grid>

            </Grid>

        </>
    )
}

export default sobre