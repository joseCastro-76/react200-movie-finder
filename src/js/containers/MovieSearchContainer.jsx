import { connect } from 'react-redux';

import MovieSearch from '../components/MovieSearch/MovieSearch'
import { fetchMovie } from '../components/MovieSearch/movieSearchActions';

function mapDispatchToProps(dispatch) {
    return {
        fetchMovie: (movie) => {
            dispatch(fetchMovie(movie));
        }
    }
}

function mapStoreToProps(store) {
    return {
        movieList: store.movie.movieList
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(MovieSearch)