import { Button, Paper, Grid, Box, Typography, TextField, Card, CardContent } from '@material-ui/core';
import React from 'react';
import './Donate.css';
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


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

function underDev() {
    toast.warning("Esse recurso está em desenvolvimento", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    })
}

function Donate() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="backGroundDonate">
                <Grid alignItems="flex-start" item xs={12} className="backGroundColorTopo">
                    <CarouselComponent />
                </Grid>
            </Grid>

            <Card>
                <CardContent className="backGroundDonate2">
                    <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" className="backGroundDonate1">
                        <Grid item xs={6}>
                            <Box>
                                <p className="aboutFont">A ONU reconhece o acesso à água e ao saneamento básico como um direito universal. A meta é que os países membros trabalhem para que todas as pessoas tenham acesso a esse direito até 2030. No entanto, a demanda crescente por água pode afetar a produção de alimentos e gerar conflitos.</p>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <img src="https://observatorio3setor.org.br/wp-content/uploads/2017/07/Neg%C3%B3cio-social-reverte-lucro-para-projetos-de-acesso-%C3%A1-%C3%A1gua-pot%C3%A1vel.jpg" alt="" width="90%" className="imgStyle paddingImg" />
                        </Grid>
                    </Grid>

                </CardContent>
                <CardContent className="backGroundDonate2">

                    <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" className="backGroundDonate1">
                        <Grid item xs={6}>
                            <Box className="paddingImg">
                                <img src="https://biodieselbrasil.com.br/wp-content/uploads/2019/05/por-que-ainda-precisamos-falar-sobre-saneamento-basico-800x480.jpg" alt="" width="90%" className="paddingImg" />
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box>
                                <p className="aboutFont"><p>Segundo a ONU, as principais razões para a falta de acesso à água são:</p>

                                    <p>- urbanização; </p>
                                    <p>- crescimento populacional; </p>
                                    <p> - desigualdade social; </p>
                                    <p> - pobreza; </p>
                                    <p>- falta de acesso à educação e ao trabalho.</p></p>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="gridPadding backGroundDonate2">
            <h2>Pensando nisso, em parceria com ONGs, pensamos em arrecadar fundos para as algumas iniciativas  </h2>
            <h3>Caso tenha interesse em contribuir, basta clicar em uma das imagens abaixo:</h3>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="gridPadding backGroundDonate2">
                <Box m={1} className="cardMargin">
                    <div onClick={underDev}>
                        <Link to="/donate" className="text-decorator-none">
                            <img src="https://www.suipa.org.br/images/abrigo.jpg" alt="Abrigo" className="cardImage" />
                        </Link>
                    </div>
                    <div onClick={underDev}>
                        <Link to="/donate" className="text-decorator-none">
                            <Typography className="titleFont">Abrigo de animais</Typography>
                            <p className="textFont">O canil não tem rede de </p>
                            <p className="textFont">abastecimento de água e a única</p>
                            <p className="textFont">cisterna se encontra seca por</p>
                            <p className="textFont">conta do período de estiagem.</p>
                      </Link>
                    </div>
                </Box>

                <Box m={1} className="cardMargin2">

                    <div onClick={underDev}>
                        <Link to="/donate" className="text-decorator-none">
                            <img src="https://www.eosconsultores.com.br/wp-content/uploads/2017/06/falta-de-saneamento.jpg" alt="Avatar" className="cardImage2" />
                        </Link>
                    </div>
                    <div onClick={underDev}>
                        <Link to="/donate" className="text-decorator-none">
                            <Typography className="titleFont">Pessoas em condição de rua</Typography>
                            <p className="textFont">Criação de bebedouros, torneiras coletivas</p>
                            <p className="textFont">e distribuição de água, nos locais</p>
                            <p className="textFont">em que há grande concentração</p>
                            <p className="textFont"> de pessoas em situação de rua.</p>
                        </Link>
                    </div>

                </Box>

                <Box m={1} className="cardMargin">
                    <div onClick={underDev}>
                        <Link to="/donate" className="text-decorator-none">
                            <img src="https://www.politize.com.br/wp-content/uploads/2019/02/saneamento-basico-no-Brasil-Politize.jpg" alt="Comunidade" className="cardImage3" />
                        </Link>
                    </div>
                    <div onClick={underDev}>
                        <Link to="/donate" className="text-decorator-none">
                            <Typography className="titleFont">Comunidades carentes</Typography>
                            <p className="textFont">Auxílio na construção de sistemas de </p>
                            <p className="textFont">distribuição de água, desde a</p>
                            <p className="textFont">construção de poços, edificação</p>
                            <p className="textFont">de caixa d’água e canalização.</p>
                        </Link>
                    </div>
                </Box>
            </Grid>

        </>
    )
}


export default Donate