import { Button, Paper, Grid, Box, Typography } from '@material-ui/core';
import React from 'react';
import './Donate.css';

function Donate() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="backgroundColorDonate">
                <Grid item xs={3}>
                    <Box paddingX={2} paddingY={7}>
                        <img src="https://i.imgur.com/NEJtMPr.png" alt="garrafa" width="340px" height="350px" />
                    </Box>
                </Grid>
                <Grid alignItems="flex-start" item xs={6}>
                    <Box paddingX={2}>
                        <Typography variant="h3" gutterBottom className="textDonate">O SNIS 2015 divulgou que no país, 35 milhões de pessoas ainda não tem acesso à água potável. A situação da água no Brasil tem piorado com o passar do tempo e isso se deve à vários fatores.</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="backgroundColorDonate">
                <Grid alignItems="flex-start" item xs={3}>
                    <Box paddingX={2} >
                        <Typography variant="h3" gutterBottom className="textDonate">Especialistas e pesquisadores elegem a falta de saneamento básico e ambiental como o principal motivo da contaminação das águas.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box paddingX={2}>
                        <img src="https://i.imgur.com/jGJyqQh.png" alt="fabrica" width="340px" height="350px" />
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="backgroundColorDonate">
                <Grid item xs={3}>
                    <Box paddingX={2} paddingY={5}>
                        <img src="https://i.imgur.com/ZTp7eZ4.png" alt="pessoa" width="340px" height="350px" />
                    </Box>
                </Grid>
                <Grid alignItems="flex-start" item xs={6}>
                    <Box paddingX={2} >
                        <Typography variant="h5" gutterBottom className="textDonate">Um dos nossos objetivos é ajudar as comunidades carentes em saneamento, e por meio de doações, distribuir água potável.</Typography>
                    </Box>
                </Grid>
            </Grid>
            
        </>
    )
}


export default Donate