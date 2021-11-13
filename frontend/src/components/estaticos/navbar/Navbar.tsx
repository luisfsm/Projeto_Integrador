import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';

function Navbar() {


    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }
    return (




        <div>
            <AppBar position="fixed" className="navcor div">
                <Toolbar variant="regular">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit" >
                            <Link to="/home">
                                <img src="https://i.imgur.com/EB2HE5Q.png" alt="logo" height="50px" />
                            </Link>
                        </Typography>
                    </Box>

                    <Box display="flex">

                        <Box mx={1} className="cursor">
                        </Box>

                        <Link to='/postagens' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioPostagem" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Nova Postagem
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Novo Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className="cursor" onClick={goLogout}>
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
        </div >
    )
}

export default Navbar
