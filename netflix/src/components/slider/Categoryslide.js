import React, { useEffect } from 'react';
import { movieData } from "../../Data";
import Card from '../card/Card';


const Categoryslide = () => {
   
    const getmovies = (data, props) => {
        let movieCategory = (data.map((item)=>item[props]))
        movieCategory = [...new Set(movieCategory)];
        return movieCategory;
    }
    
    const filterCategory = getmovies(movieData,"category")
    useEffect(()=>{
        
    },[])

    return(
        <div>
            {
                filterCategory ? 
                <>
                {
                    filterCategory.map((current,index)=>{ 
                        return (
                            <>
                            <div className='my-3'>
                                <h5 className='text-capitalize text-white'>{current}</h5>
                            </div>
                            <Card data={movieData.filter((item) => item.category===current)}/>
                            </>
                        )
                    })
                }
                </> : <div>Loading</div>
            }
        </div>
  )
}
export default Categoryslide