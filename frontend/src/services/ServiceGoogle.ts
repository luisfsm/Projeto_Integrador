import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://newsapi.org/v2/everything?q=água+potável&apiKey=2a2f562b1a50459aba9bed7c41455db7'
})


export const buscaGoogle = async(url: any,setDado: any) => {
    const resposta = await api.get(url)
    setDado(resposta.data.articles)
}
