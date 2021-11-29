import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListarTema.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModeEditSharpIcon from '@mui/icons-material/ModeEditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

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
    <Grid container className="bodyTema" justifyContent="center">
      <Box marginTop={12}>
        {

          temas.map(tema => (
            <Box m={2}>

              <Box className="alignItems">
                <Card variant="outlined" className="backgroundColor" style={{ padding: "0px", width: "500px" }}>
                  <CardContent>
                    <Box display="flex" justifyContent="flex-end">
                      <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none " >
                        <ModeEditSharpIcon className="iconBackGround" />
                      </Link>

                      <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none"><DeleteSharpIcon className="iconBackGround" /></Link>

                    </Box>
                    <Typography color="textSecondary" gutterBottom>
                      Tema
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {tema.descricao}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

            </Box>
          ))
        }

      </Box>
    </Grid>
    </>
  );
}


export default ListaTema;