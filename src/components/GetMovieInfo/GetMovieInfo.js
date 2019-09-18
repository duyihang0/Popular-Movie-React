import React, { Component } from 'react';
import axios from '../../axios';
// eslint-disable-next-line import PopMovies from '../../components/PopMovies/PopMovies';
// import MoviePoster from '../../components/MoviePoster/MoviePoster';

import Spinner from '../Spinner/Spinner';


import MovieInfoDisplay from '../MovieInfoDisplay/MovieInfoDisplay';

class GetMovieInfo extends Component {
    state = {
        movie_info: null,
        error: false,
        overview: null,
        vote_average: null,
        original_title: null,
        release_date: null,
        poster_path: null

    
    }

    componentDidMount () {
            axios.get('https://api.themoviedb.org/3/movie/' + this.props.movie_id +  'i?api_key=537d6058aba8ec096cc4927786f25c7e&language=en-US&page=1') 
            .then( response => {
                console.log( response );
                this.setState({movie_info: response.data});
                this.setState({overview: response.data.overview});
                this.setState({release_date: response.data.release_date});
                this.setState({original_title: response.data.original_title});
                this.setState({vote_average: response.data.vote_average});
                this.setState({poster_path: response.data.poster_path});
            } )
            .catch(error =>{
                console.log("ERROR");
                this.setState({error: true});
            });
    }

    render () {
        console.log(this.state.movie_info)
   
        let movie_info = this.state.error ? <p>Poster can't be loaded!</p> : <Spinner />;
        
        if (this.state.overview) {
            movie_info = (<div>
                <section >
                  
                   <MovieInfoDisplay overview={this.state.overview} 
                    vote_average={this.state.vote_average} 
                    original_title={this.state.original_title}
                    release_date={this.state.release_date} 
                    poster_path = {this.state.poster_path}/>
                    
                </section>
                {/* <section>
                    <MovieInfoDisplay movies_text={this.state.movie_text}/>
                </section> */}
            </div>);
        }
      return (
        <div>
            
            {
                movie_info

            }


        </div>

      );     
    }
}
export default GetMovieInfo;

