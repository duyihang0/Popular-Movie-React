import React, { Component } from 'react';
import MovieDetail from '../../public/pictures/MovieDetail.png';
import nav_bar from '../../../public/pictures/nav_bar.png'

class Header extends Component {
    state = {

    }

    render () {
        return (
             <Link to={{
            pathname: '/movie-detail',
         
        }}>
         <img src={nav_bar} alt="updating"/>
         </Link>
        );
    }
}

export default Header;