import { useParams } from 'react-router-dom'
import { key } from "../../config/acess";
import { useEffect } from "react";

export default function Details(){
   
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}&language=pt-BR`)
        .then(response => response.json())
        .then(data => console.log(data))
     
     }, [])

    return(
        <h1>Página de detalhes.</h1>
        
    )
}