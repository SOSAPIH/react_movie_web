import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
         const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json(); 
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);
    
    return (
        <>
            {loading ? <h1>Loading...</h1> :  (<div>
            <h1>{movie.title_long} rating:{movie.rating}</h1>
            <div>language: {movie.language}</div>
                <img src={movie.large_cover_image} alt={movie.title} />
            <div>description: {movie.description_full}</div>
            </div>)}
        </>
    )
}

export default Detail;