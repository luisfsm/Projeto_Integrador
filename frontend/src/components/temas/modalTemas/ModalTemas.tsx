import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Box, TextField, Typography } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import CadastroTema from '../cadastroTema/CadastroTema';
import HealingSharpIcon from '@mui/icons-material/HealingSharp';
import './ModalTemas.css'


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.default,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalTemas() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper} id="modalPostagemBackGround">
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />
            </Box>

            <CadastroTema />
        </div>
    );


        return (
            <>

                 <Typography  className="cursor" variant="h6" color="initial"  onClick={handleOpen} style={{color: "black"}}>
                    <HealingSharpIcon className="iconHome" /> Novo Tema
                 </Typography>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </>
        )
    }

    export default ModalTemas;
