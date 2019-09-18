import React, { Component } from 'react';

import './MoviePoster.css';
import {Router, Link} from 'react-router-dom';


class MoviePoster extends Component {
   render () {
       let poster_url = 'https://image.tmdb.org/t/p/w185/' + this.props.poster_path ; 
       console.log(this.props.movie_id);
        return (
         
         <Link to={{
            pathname: '/movie-detail',
            state:{
               movie_id: this.props.movie_id
            }
        }}>
         <img src={poster_url} alt="updating"/>
         </Link>
         
         // <Route path="/new-post" component={MovieDetail} />

      );

   }
};

export default MoviePoster;
