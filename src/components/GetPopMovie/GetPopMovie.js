import React, { Component } from 'react';
import axios from '../../axios';
// eslint-disable-next-line import PopMovies from '../../components/PopMovies/PopMovies';
// import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieGrid from '../MovieGrid/MovieGrid';
import './GetPopMovie.css';

import Spinner from '../Spinner/Spinner';

class GetPopMovie extends Component {
    state = {
        pop_movie: null
    }

    componentDidMount () {
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=') //API key need
            .then( response => {
                //console.log( response );
                this.setState({pop_movie: response.data.results});
            } )
            .catch(error =>{
                this.setState({error: true});
            });
    }

    render () {
        console.log(this.state.pop_movie)
        let movie = this.state.error ? <p>Poster can't be loaded!</p> : <Spinner />;
        
        if (this.state.pop_movie) {
            movie = (<div>
                <section className= "MoviePosters">
                  <MovieGrid movies={this.state.pop_movie}/>
                </section>
            </div>);
        }
      return (
        <div>
            
            
            {
                movie
            }




        </div>






      );     
    }
}
export default GetPopMovie;

    // <MovieGrid 
    //     key={PopMovies.id} 
    //     path={PopMovies.poster_path}
    // />