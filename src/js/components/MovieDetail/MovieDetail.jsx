import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieDetail(props) {
    const { fetchMovieInfo, movieInfo } = props;

    useEffect(() => {
        fetchMovieInfo(props.match.params.id)
    }, [])

    return (
        <div>
            <div className="row">
                <Link
                    to={ '/' }
                    className="text-primary mb-3"
                >Go Back</Link>
            </div>
            <div className="media">
                <img src={ movieInfo.Poster } className="mr-3" alt="movie"/>
                <div className="media-body">
                    <h3 className="mt-0 font-weight-bold">{ movieInfo.Title }</h3>
                    <span className="badge badge-success mr-2">{ `Released ${movieInfo.Year}` }</span>
                    <span className="badge badge-success mr-2">{ movieInfo.Runtime }</span>
                    <span className="badge badge-success">{ movieInfo.Genre }</span>
                    <p className="mt-2">{ movieInfo.Plot }</p>
                    <p>{ movieInfo.Awards }</p>
                    <p><span className="font-weight-bold">Metascore:</span> { movieInfo.Metascore }/100</p>
                    <p><span className="font-weight-bold">IMDB:</span> {  movieInfo.imdbRating }</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;