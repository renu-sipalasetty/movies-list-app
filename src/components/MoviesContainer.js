import React from 'react'
import MoviesForm from './MoviesForm'
import MoviesStatus from './MoviesStatus'
import MovieList from './MovieList'


const MoviesContainer=(props)=>{
    return (
        <div className='container'>

            <div className="row">
                <div className='col-lg-6 col-sm-6 order-2 order-lg-1 mt-3'>
                    <MovieList />
                </div>

                <div className='col-lg-6 col-sm-6 order-1 col-lg-2 mt-1'>
                    <MoviesForm />
                    <MoviesStatus/>   
                </div>

            </div>
        </div>
        
    )
}

export default MoviesContainer