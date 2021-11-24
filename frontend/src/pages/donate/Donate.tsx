import { Button, Paper, Grid, Box, Typography, TextField, Card, CardContent } from '@material-ui/core';
import React from 'react';
import './Donate.css';
import { toast } from 'react-toastify';

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
            <Grid container direction="row" justifyContent="center" alignItems="center" className="backgroundColorDonate">
                <Grid item xs={4} className="box1donate">
                    <Box >
                        <img src="https://i.imgur.com/NEJtMPr.png" alt="garrafa" width="340px" height="350px" />
                    </Box>
                </Grid>
                <Grid alignItems="flex-start" item xs={5}>
                    <Box paddingX={6} paddingY={6}>
                        <Typography variant="h1" gutterBottom className="textDonate">O SNIS 2015 divulgou que no país, 35 milhões de pessoas ainda não tem acesso à água potável. A situação da água no Brasil tem piorado com o passar do tempo e isso se deve à vários fatores.
                            <br />
                            <br />
                            <br />
                            Pensando nisso, um dos nossos objetivos é ajudar a comunidade, e por meio de doações, distribuir água potável.</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" className="backgroundColorDonate">
                <Box>
                    <Typography className="textDonate">Essas são as iniciativas em aberto:</Typography>
                </Box>
            </Grid>


            <Grid container direction="row" justifyContent="center" alignItems="center" className="backgroundColorDonate">
                <Box m={1}>
                    <Card className="cardColor">
                        <CardContent>
                            <div className="card">
                                <img src="https://www.correiodopovo.com.br/image/policy:1.514292:1604497439/.jpg?f=2x1&$p$f=7d891a5&w=720&$w=3b33d2d" alt="Avatar" width='400px' height="300px" />
                            </div>
                            <div>
                                <Typography className="titleText">Abrigo de animais em São Paulo</Typography>
                                <Button onClick={underDev} className='botaoSaibaMais'>Saber mais</Button>
                                <Button onClick={underDev} className='botaoDoar'>Doar</Button>
                            </div>

                        </CardContent>
                    </Card>
                </Box>

                <Box m={1}>
                    <Card>
                        <CardContent>
                            <div className="card">
                                <img src="https://www.tupi.fm/wp-content/uploads/IMG_6102-1.jpg" alt="Avatar" width='400px' height="300px" />
                                <Typography className="titleText">Pessoas em condição de rua</Typography>
                                <Button onClick={underDev} className='botaoSaibaMais'>Saber mais</Button>
                                <Button onClick={underDev} className='botaoDoar'>Doar</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Box>

                <Box m={1}>
                    <Card>
                        <CardContent>
                            <div className="card">
                                <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="Avatar" width='400px' height="300px" />
                                <Typography className="titleText">Iniciativa 3</Typography>
                                <Button onClick={underDev} className='botaoSaibaMais'>Saber mais</Button>
                                <Button onClick={underDev} className='botaoDoar'>Doar</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>

        </>
    )
}


export default Donate