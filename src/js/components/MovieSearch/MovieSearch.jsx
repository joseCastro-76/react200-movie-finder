import React from 'react';
import { Link } from 'react-router-dom';

function MovieSearch(props) {
    let input;
    const { fetchMovie, movieList } = props;

    const movies = !movieList.Search ? null : movieList.Search.map((movie, index) => {
        return (
            <div className="card mb-3 clearfix" key={ index }>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={ movie.Poster } className="card-img" alt="movie" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column h-100">
                            <h1 className="card-title">{ movie.Title }</h1>
                            <h4 className="card-subtitle mb-3 text-muted">{ movie.Year }</h4>
                            <div className="mt-auto">
                                <Link
                                    to={ `/movie/${ movie.imdbID }` }
                                    className="btn btn-lg btn-primary float-right"    
                                >More Information</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="input-group mb-3">
                <input ref={ node => { input = node }} className="form-control"/>
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={ () => fetchMovie(input.value) }
                    >Go!
                    </button>
                </div>
            </div>
            { movies }
        </div>
    )
}

export default MovieSearch;