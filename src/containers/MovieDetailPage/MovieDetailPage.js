import React, {Component} from 'react';
import GetMovieInfo from '../../components/GetMovieInfo/GetMovieInfo';

 

class MovieDetailPage extends Component{

    render(){
    //    console.log(movie_id);
          const { movie_id } = this.props.location.state;
  

        return(
            <div>
        <GetMovieInfo movie_id={movie_id}/>

    </div>
        );
    } 
    
};

export default MovieDetailPage;