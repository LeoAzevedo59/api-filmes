import { Link, useParams } from 'react-router-dom'
import { key, image_path } from "../../config/acess";
import { useState, useEffect } from "react";
import { Container } from './style';

export default function Details(){
   
    const { id } = useParams();
    const [movies, setMovies] = useState({});
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {

            const {title, overview, poster_path, release_date} = data;

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date
            }

            setMovies(movie);
        })
     

     }, [id])

    return(
        <Container>
            <div className='movie'>
                <img src={movies.image} alt={movies.sinopse}/>
                <div className='details'>
                    <h1>{movies.title}</h1>
                    <span><b>Sinopse: </b>{movies.sinopse}</span>
                    <span><b>Release date: </b>{movies.releaseDate}</span>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    )
}