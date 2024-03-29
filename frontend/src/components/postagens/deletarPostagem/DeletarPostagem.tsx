import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import { useHistory, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';




function DeletarPostagem() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [post, setPosts] = useState<Postagem>()

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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/home')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success("Postagem deletada com sucesso", {
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

    function nao() {
        history.push('/home')
    }

    return (
        <>
            <Box marginTop={12}>
                <Box className="alignItems">
                    <Card variant="outlined" >
                        <CardContent>
                            <Box justifyContent="center">
                                <Typography color="textSecondary" gutterBottom>
                                    Deseja deletar a postagem:
                                </Typography>
                                <Typography variant="h5" component="h2" >
                                    {post?.titulo}
                                </Typography>
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Box display="flex" justifyContent="start" ml={1.0} mb={2} className="cardPadding" >
                                <Box mx={2}>
                                    <Button onClick={sim} variant="contained" className="apagarSim" size='large' >
                                        Sim
                                    </Button>
                                </Box>
                                <Box>
                                    <Button onClick={nao} variant="contained" size='large' color="secondary" className="apagarNao">
                                        Não
                                    </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </>
    );
}
export default DeletarPostagem;