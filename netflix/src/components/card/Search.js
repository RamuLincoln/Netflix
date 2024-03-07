import React from 'react';

const Search = ({data}) => {
  return (
    <div className='my-3'>
        {
            data.length>0 ?
            <>
               <div className="slider-container">
                        {
                            data.map((current)=>{
                                return (
                                    <>
                                <div>
                                    <div className='card'>
                                        <div className='card-body p-0'>
                                            <img src={current.images} alt='' className='w-100 h-100 img_latest img-fluid' />
                                        </div>
                                    </div>
                                </div>
                                </>
                                )
                            })
                        }
                </div>
            </> : <div>Loading</div>
        }
 
  </div>
  )
}

export default Search