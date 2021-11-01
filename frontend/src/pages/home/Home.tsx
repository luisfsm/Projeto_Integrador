import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import './Home.css';

import './Home.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';


function Home() {
    return (
        <>
        
        <div className='divWhite'>
            <Grid container p={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={1} alignItems="center">
                    <img src="https://i.imgur.com/z0ttVob.png?1" alt="" className="igUserms" />
                </Grid>
                <Grid item xs={8}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        placeholder="Faça um post"
                        id="textarea"
                        className="textarea"
                    />
                    <Box marginTop={2} textAlign="center">
                        <Button className="button">
                            Postar
                        </Button>

                    </Box>
                </Grid>
            </Grid>

            <Grid container p={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={1}>
                    <img src="https://i.imgur.com/z0ttVob.png?1" alt="" className="igUserms" />
                </Grid>
                <Grid item xs={8}>
                    <Grid container className="posts-users" justifyContent="start" alignItems="center" p={2}>
                        <Grid item xs={4} >
                            <img src="https://i.imgur.com/BJLi3aC.jpg?1" alt="" className="imgPosts" />
                        </Grid>
                        <Grid item xs={5} alignItems="center" alignContent="flex-end" >
                            <Box>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, veritatis repellat commodi cumque asperiores ipsadadas eritatis repellat commodi cumque asperiores 

                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container p={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={1}>
                    <img src="https://i.imgur.com/z0ttVob.png?1" alt="" className="igUserms" />
                </Grid>
                <Grid item xs={8}>
                    <Grid container className="posts-users" justifyContent="start" alignItems="center" p={2}>
                        <Grid item xs={4} >
                            <img src="https://i.imgur.com/BJLi3aC.jpg?1" alt="" className="imgPosts" />
                        </Grid>
                        <Grid item xs={5} alignItems="center" alignContent="flex-end" >
                            <Box>
                            
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, veritatis repellat commodi cumque asperiores ipsa
                                    </Typography>
                      
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        </>
    )
}

export default Home