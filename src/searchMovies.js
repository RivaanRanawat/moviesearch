import React, {useState} from "react";
import './App.css';
export default function SearchMovies(){
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    /*Used Async/Await to get the Movie List*/
    
    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

        /* Setting up the header and result card*/
    return (

        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name:</label>
                <input className="input" type="text" name="query"
                    placeholder="eg. Kabir Singh"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>

            <div className="cardList">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="cardImage grow"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title}
                            />
                        <div className="cardContent">
                        <h3 className="cardTitle tc">{movie.title}</h3>
                        <p><small>Date Of Release: {movie.release_date}</small></p>
                        <p><small>Rating: {movie.vote_average}</small></p>
                        <p className="cardDes">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>    
        </>
    )
}