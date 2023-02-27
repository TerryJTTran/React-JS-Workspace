import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//Grabs movie content from OMDb API
//API Key: c8de675e

const API_URL = 'http://www.omdbapi.com?apikey=c8de675e'

const movie = {
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm ] = useState('');


    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const movie_data = await response.json();

        setMovies(movie_data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return(
        <div className = "app">
            <h1>FilmVerse</h1>
            
            <div className = "search">
                <input
                    placeholder = "Search for movies"
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src = {SearchIcon}
                    alt = "search"
                    onClick = {() => searchMovies(searchTerm)}
                />
            </div>
            
            {movies?.length > 0
                ? (
                    <div className = "container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}       
                    </div>
                ) :
                (
                    <div>
                        <h2>No movies found</h2>
                    </div>
            )} 
        </div>
    );
}

export default App;