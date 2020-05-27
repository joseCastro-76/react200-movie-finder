import { connect } from 'react-redux';

import MovieDetail from '../components/MovieDetail/MovieDetail';
import { fetchMovieInfo } from '../components/MovieDetail/movieDetailActions';

function mapDispatchToProps(dispatch) {
    return {
        fetchMovieInfo: (id) => {
            dispatch(fetchMovieInfo(id));
        }
    }
}

function mapStoreToProps(store) {
    return {
        movieInfo: store.movieInfo.movieInformation
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(MovieDetail);