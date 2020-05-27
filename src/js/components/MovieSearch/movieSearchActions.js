import axios from 'axios';

export const fetchMovie = (movie) => {
    return {
        type: 'FETCH_MOVIE',
        payload: axios.get('http://localhost:3000/movieInfo/' + movie)
                .then(res => res.data)
    };
}