import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModeEditSharpIcon from '@mui/icons-material/ModeEditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

import './ListarPostagem.css';


function ListarPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])
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

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
        <Box marginTop={8}>

        
            {
                posts.map(post => (

                    <Box m={2} padding={2} className='hr'>
                        <Card variant="outlined" className="cardColor card">
                            <CardContent>
                                <Box display="flex" justifyContent="flex-end">
                                    <Typography variant="body2" component="p" className="textoTema" >
                                        {post.temas?.descricao}
                                    </Typography>

                                    <Link to={`/formularioPostagem/${post.id}`}         className="text-decorator-none " >
                                        <ModeEditSharpIcon className="iconBackGround" />
                                    </Link>
                                    
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none"><DeleteSharpIcon className="iconBackGround" /></Link>
                                    
                                </Box>

                                <Typography variant="h5" component="h2" className="tituloPostagem">
                                    {post.titulo}
                                </Typography>

                                <Typography variant="body2" component="p" className="textoPostagem">
                                    {post.texto}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))
            }
        </Box>
        </>)
}
export default ListarPostagem;

