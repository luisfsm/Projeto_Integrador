import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListarTema.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();

  useEffect(() => {
    if (token == '') {
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


  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      <Box marginTop={12}>
        {

          temas.map(tema => (
            <Box m={2}>

              <Box className="alignItems">
                <Card variant="outlined" className="backgroundColor" style={{padding: "0px", width: "500px"}}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Tema
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {tema.descricao}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>
                      <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1} marginRight={3}>
                          <Button variant="contained" className="marginLeft" size='small' color="primary" >
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft" size='small' color="secondary">
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>

            </Box>
          ))
        }

      </Box>

    </>
  );
}


export default ListaTema;