import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <AppBar position="static" className="navcor">
                <Toolbar variant="dense">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit" >
                            <Link to="/home">
                                <img src="https://i.imgur.com/EB2HE5Q.png" alt="logo" height="50px" />
                            </Link>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box mx={1} className="cursor">
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Nova Postagem
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Novo Tema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" >
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
