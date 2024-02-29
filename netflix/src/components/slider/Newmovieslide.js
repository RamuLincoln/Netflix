import React, { useEffect, useState } from 'react';
import { movieData } from "../../Data";
import Card from '../card/Card';

const Newmovieslide = () => {

    const[newmovies, setNewmovies] = useState([]);
   
    const getmovies = () => {
        let newmoviesfil = (movieData.filter((item)=>item.new === true))
        setNewmovies(newmoviesfil)
    }
    
    useEffect(()=>{
        getmovies();
    },[])

    return(
        <div className='my-3'>
            <h5 className='text-white'>Trending</h5>
            <Card data={newmovies}/>    
        </div>
  )
}
export default Newmovieslide