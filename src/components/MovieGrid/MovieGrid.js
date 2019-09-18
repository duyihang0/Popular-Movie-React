import React, {Component} from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';

class MovieGrid extends Component{
    render () {
       return this.props.movies.map(movie => {
        console.log(movie.id)   
        return (<MoviePoster 
                movie_id={movie.id} 
                poster_path={movie.poster_path}
                
            />);
        })

       
    }
}

export default MovieGrid;