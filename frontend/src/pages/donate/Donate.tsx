import { Button, Paper, Grid, Box, Typography, TextField, Card, CardContent } from '@material-ui/core';
import React from 'react';
import './Donate.css';

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
                                <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="Avatar" width='400px' />
                            </div>
                            <div>
                                <Typography className="titleText">Iniciativa 1</Typography> 
                                <Button className='botaoSaibaMais'>Saber mais</Button>    
                                <Button className='botaoDoar'>Doar</Button>               
                            </div>
                            
                        </CardContent>
                    </Card>
                </Box>

                <Box m={1}>
                    <Card>
                        <CardContent>
                            <div className="card">
                                <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="Avatar" width='400px' />
                                <Typography className="titleText">Iniciativa 2</Typography>
                                <Button className='botaoSaibaMais'>Saber mais</Button>    
                                <Button className='botaoDoar'>Doar</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Box>

                <Box m={1}>
                    <Card>
                        <CardContent>
                            <div className="card">
                                <img src="https://www.correio24horas.com.br/fileadmin/_processed_/c/3/csm_24102018_baz_sommelier_de_aguas_cred_divulgacao_shutterstock_1_aff62af31d.jpg" alt="Avatar" width='400px' />
                                <Typography className="titleText">Iniciativa 3</Typography>
                                <Button className='botaoSaibaMais'>Saber mais</Button>    
                                <Button className='botaoDoar'>Doar</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>



        </>
    )
}


export default Donate