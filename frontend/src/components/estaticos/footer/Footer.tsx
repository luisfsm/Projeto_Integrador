import React from 'react'
import './Footer.css';
import {Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Box>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textofooter' >© 2021 Copyright:</Typography>
                        </Box>
                        <Box>
                                <Typography variant="subtitle2" gutterBottom className='textofooter' align="center">Projeto Haqua</Typography>
                        </Box>
                    </Box>
                </Grid>
            
        </>
    )
}

export default Footer;
