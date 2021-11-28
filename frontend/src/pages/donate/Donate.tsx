import { Button, Paper, Grid, Box, Typography, TextField, Card, CardContent } from '@material-ui/core';
import React from 'react';
import './Donate.css';
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'

function CarouselComponent() {
    const [items, setstate] = useState([
        { id: 1, title: 'item #1', img: "https://i.imgur.com/NEJtMPr.png" },
        { id: 2, title: 'item #2', img: "https://i.imgur.com/NEJtMPr.png" },
        { id: 3, title: 'item #3', img: "https://i.imgur.com/NEJtMPr.png" },
        { id: 4, title: 'item #4', img: "https://i.imgur.com/NEJtMPr.png" }
    ])
    return (
        <Carousel isRTL={false} autoPlaySpeed={5500}>
            {items.map(item => <div key={item.id}>
                <img src={item.img} alt="Iniciativas" width="100%" height="400px" />

            </div>)}
        </Carousel>
    )
}

function Donate() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="flex-start" item xs={12} className="backGroundColorTopo">
                    <CarouselComponent />
                </Grid>
            </Grid>

            <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <Box>
                        <p className="aboutFont">Pensando nisso, um dos nossos objetivos é ajudar a comunidade, e por meio de doações, distribuir água potável. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae ad maxime odit, qui ratione alias autem cupiditate quibusdam eiciendis recusandae ad maxime odit, qui ratione alias autem cupiditate quibusdam porro suscipit aperiam dicta officia necessitatibus mollitia vel eum distinctio</p>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="" width="90%" className="imgStyle paddingImg" />
                </Grid>
            </Grid>

            <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <Box className="paddingImg">
                        <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="" width="90%" className="paddingImg" />
                        </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <p className="aboutFont">Pensando nisso, um dos nossos objetivos é ajudar a comunidade, e por meio de doações, distribuir água potável. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae ad maxime odit, qui ratione alias autem cupiditate quibusdam eiciendis recusandae ad maxime odit, qui ratione alias autem cupiditate quibusdam porro suscipit aperiam dicta officia necessitatibus mollitia vel eum distinctio</p>
                    </Box>
                </Grid>
            </Grid>


            <Grid container direction="row" justifyContent="center" alignItems="center" className="gridPadding">
                <Box m={1} className="cardMargin">
                    <div >
                        <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="Avatar" className="cardImage" />
                    </div>
                    <div>
                        <Typography className="titleFont">Iniciativa 1</Typography>
                        <Typography className="textFont">Texto da iniciativa 1</Typography>
                    </div>
                </Box>

                <Box m={1} className="cardMargin">
                    <div >
                        <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="Avatar" className="cardImage" />
                    </div>
                    <div>
                        <Typography className="titleFont">Iniciativa 2</Typography>
                        <p className="textFont">Texto da iniciativa 2</p>
                    </div>
                </Box>

                <Box m={1} className="cardMargin">
                    <div >
                        <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="Avatar" className="cardImage" />
                    </div>
                    <div>
                        <Typography className="titleFont">Iniciativa 3</Typography>
                        <Typography className="textFont">Texto da iniciativa 3</Typography>
                    </div>
                </Box>
            </Grid>






        </>
    )
}


export default Donate