import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './DeletarTema.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarTema() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    nome: "i",
    descricao: ''
  })
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

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    console.log("fui clicacdo sim ")


    history.push('/temas')
    deleteId(`/temas/${id}`, {
      headers: {
        'Authorization': token
      }
    });

    toast.success("Tema deletado com sucesso", {
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
    history.push('/temas')
  }



  useEffect(() => {
    console.log(id)
    if (id !== undefined) {
      findById(id)
    }
  }, [id])




  return (
    <>
      <Grid container className="bodyTemaDeletar" justifyContent='center' >
        <Box marginTop={12} className="ListTema">
          <Box className="alignItems">
            <Card variant="outlined" className="backgroundColor" style={{ padding: "0px", width: "500px" }}>
              <CardContent>
                <Box justifyContent="center">
                  <Typography color="textSecondary" gutterBottom>
                    Deseja deletar o Tema:
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {tema?.descricao}
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
      </Grid>
    </>
  );
}

export default DeletarTema
