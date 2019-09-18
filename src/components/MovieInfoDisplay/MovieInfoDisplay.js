import React, { Component } from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import mark from '../../pictures/favourite.png';
import './MovieInfoDisplay.css';  
import {Link} from 'react-router-dom';

class MovieInfoDisplay extends Component {
 

    render () {
        console.log(this.props.overview)
        console.log(this.props.release_date)
        console.log(this.props.vote_average)
        console.log(this.props.original_title)
        return (
            <div>
                <Link to={{ pathname: '/', }}>
                <a className = 'bar'><h1><a className= "MovieDetail" > <i class="arrow left"></i>MovieDetail</a></h1></a>
                </Link>
                <a><h1>{ this.props.original_title }</h1></a>
                 <MoviePoster poster_path={this.props.poster_path}/><img src= {mark} />
                <h3>{ this.props.release_date}</h3>
                <h3>{ this.props.vote_average}{'/10'}</h3>    
                <h3>{ this.props.overview}</h3>
                
                
            </div>
        );
    }
}

export default MovieInfoDisplay;