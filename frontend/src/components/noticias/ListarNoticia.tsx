import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ModeEditSharpIcon from '@mui/icons-material/ModeEditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { TokenState } from '../../store/tokens/tokensReducer'
import { buscaGoogle } from '../../services/ServiceGoogle';
import Noticias from '../../models/Noticias';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './ListarNoticia.css';




function ListarNoticia() {
    const [list, setNoticias] = useState<Noticias[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    const arrayNoticias = [1, 2, 7, 8, 0];
   
    let numero = arrayNoticias[Math.floor(Math.random() * arrayNoticias.length)];
    console.log(numero)
    let history = useHistory();

    

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            history.push("/login")
        }
    }, [token])

    async function getNoticia() {
        await buscaGoogle("", setNoticias)
    }
    
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: "3%"
    });

    useEffect(() => {
        getNoticia()

    }, [list.length])
    
    let lists = list.filter((noticia, i) => i ==numero)
    
    return (
        <>
            {
                lists.map((noticia, i) => (
                    <Box marginTop={1} margin={1} display="flex" justifyContent="center" >
                        <Grid container >
                            <Grid item alignItems='center'>
                                <Box>
                                    <ButtonBase>
                                        <a href={noticia.url} target="_blank" ><Img alt={noticia.title} src={noticia.urlToImage} title={noticia.title} /></a>
                                    </ButtonBase>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                ))
            }
        </>)
}

export default ListarNoticia