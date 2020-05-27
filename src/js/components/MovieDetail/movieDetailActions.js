import axios from 'axios';

export const fetchMovieInfo = (id) => {
    return {
        type: 'FECTH_MOVIE_INFORMATION',
        payload: axios.get('http://localhost:3000/movie/' + id)
                .then(res => res.data)
    };
}