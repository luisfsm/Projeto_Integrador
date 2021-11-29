import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Box, Select, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'


import './CadastroPostagem.css';

function CadastroPostagem() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            nome: '',
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        temas: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            temas: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            temas: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Postagem atualizada com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })

        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Postagem atualizada com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
        back()
    }

    function back() {
        history.push('/postagens')
    }

    return (
        <div>
            <Box>
                <Container maxWidth="sm" className="topo paddingGeral">
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" color="textPrimary" component="h1" align="center" style={{color: "black"}} >POSTAGEM</Typography>
                        <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" color="primary" margin="normal" fullWidth className="border" />

                        <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" margin="normal" fullWidth className="border" />

                        <FormControl>
                            <Box className="">
                                <FormHelperText className="textColor">Escolha um tema para a postagem</FormHelperText>
                                <Select className="border menuItemSize"
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })}>
                                    {
                                        temas.map(tema => (
                                            <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                        ))
                                    }
                                </Select>

                            </Box>
                            <Box className="boxPadding" marginTop={1} mb={3}>
                                <Button type="submit" variant="contained" color="primary">
                                    Postar
                                </Button>
                            </Box>
                        </FormControl>

                    </form>
                </Container>
            </Box>
        </div>
    )
}

export default CadastroPostagem;