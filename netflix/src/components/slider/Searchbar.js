import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { movieData } from "../../Data";
import Search from '../card/Search';


const Searchbar = () => {
    const [search,setSearch] = useState([])
    const [filters, setFilters] = useState([])
    
    useEffect(() => {
        console.log(movieData)
        setFilters(movieData)
    },[])

    const getmovies = (data, props) => {
        console.log(data,props)
        let res = data.filter((f) => f.title === props)
        res = [...new Set(res)];
        console.log(res)
        return res;
    }
    const searchfilter = getmovies(filters,search);
    
    return<>
              <Form className="d-flex">
                <input className=' desk_search text-capitalize text-white' onChange={(e) => setSearch(e.target.value.toLowerCase())} value={search} placeholder="full title "  aria-label="Search" />
                
              </Form>
        <div>
            {
                searchfilter ? 
                <>
                {
                    searchfilter.map((current,index)=>{ 
                        console.log("current",current.title)
                        return (
                            <>
                            <div className='my-3'>
                                <h5 className='text-capitalize text-white'>{current.title}</h5>
                            </div>
                            <Search data={movieData.filter((item) => item === current)}/>
                            </>
                        )
                    })
                }
                </> : <div>Loading</div>
            }
        </div>
        </>
}
export default Searchbar;