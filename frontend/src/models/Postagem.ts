import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    temas?: Tema | null;
}

export default Postagem;