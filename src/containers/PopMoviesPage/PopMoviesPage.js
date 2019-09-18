import React from 'react';

import GetPopMovie from '../../components/GetPopMovie/GetPopMovie';



const PopMoviePage = () => (
    <div>
       <a className = 'bar'><h1><a className= "MovieDetail" > Popular Movies</a></h1></a>       
        <GetPopMovie/>        
    </div>
);


export default PopMoviePage;