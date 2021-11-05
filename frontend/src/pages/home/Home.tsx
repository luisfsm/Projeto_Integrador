import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import './Home.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HealingSharpIcon from '@mui/icons-material/HealingSharp';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';


function Home() {
    return (
        <>
            <Grid container xs={12} display="flex" flexWrap="wrap">
                <Grid item xs={3} display="flex" direction="row" className="retanguloHome" justifyContent="center">
                    <Box className="LogoHome" alignItems="center" flexDirection="column" >
                        <Box>
                            <img src="https://i.imgur.com/EB2HE5Q.png" alt="logo" className="logoHome" width="250px" height="250px" />
                        </Box>
                        <Box>
                            <Typography className="textHome" alignItems="center"> <HomeSharpIcon className="iconHome" /> Home</Typography>
                        </Box>
                        <Box>
                            <Typography className="textHome" alignItems="center"><HealingSharpIcon className="iconHome" /> Temas</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className="p-5-home" display="flex" direction="row" >
                    <Box display="flex" >
                        <Box>
                            <AccountCircleIcon className="iconUsersHome" />
                        </Box>
                        <Box>
                            <TextareaAutosize
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Poste alguma coisa"
                                defaultValue=""
                                style={{ width: 200 }}

                                className="textarea"
                            />

                            <Box display="flex" justifyContent="flex-start">
                                <AttachFileIcon className="logoHomePost" />
                            </Box>
                            <Box display="flex" justifyContent="flex-end">
                                <Button className="btnHome" variant="contained">Postar</Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={3} >

                </Grid>

            </Grid>
        </>
    )
}

export default Home
