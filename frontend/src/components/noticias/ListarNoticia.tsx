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

    useEffect(() => {
        getNoticia()

    }, [list.length])

    let lists = list.filter((noticia, i) => i < 1)

    return (
        <>
            {
                lists.map((noticia, i) => (
                    <Box>
                        <div className="event">
                            <a href={noticia.url} target="_blank" className="text-decorator-none">
                                <img alt={noticia.title} src={noticia.urlToImage} height={60} />
                            </a>
                            <div>
                                <Box marginLeft={2}>
                                    <Typography>
                                        {noticia.title}
                                    </Typography>
                                </Box>
                            </div>
                        </div>
                    </Box>
                ))
            }
        </>)
}

export default ListarNoticia