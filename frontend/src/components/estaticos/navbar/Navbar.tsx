import React from 'react';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Navbar.css';
import PaidIcon from '@mui/icons-material/Paid';
import HealingSharpIcon from '@mui/icons-material/HealingSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();

    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push('/login')
    }

    var navbarComponent;

    //Daqui para baixo é constante de NavBar

    if (token !== "") {
        navbarComponent = <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" className="navcor">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/home">
                            <img src="https://i.imgur.com/FpzQD5k.png" alt="" width="70px" height="60px" className="logo" />
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>

                        <Link to="/donate" className="textLogin">              
                                    <Button color="inherit"><PaidIcon style={{marginRight: "5px"}}
                                    /> Doações</Button>                             
                            </Link>

                            <Link to="/sobre" className="textLogin paddingButtonNav">
                                    <Button color="inherit"><PeopleAltSharpIcon style={{marginRight: "5px"}}/>  Sobre Nós
                                    </Button>
                            </Link>

                        <Link to="/login" className="textLogin">
                            <Button color="inherit" onClick={goLogout}>
                                Logout
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div >
    }

    return (
        <>
            {navbarComponent}
        </>

    )
}

export default Navbar
