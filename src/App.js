import React from 'react'
import MoviesContainer from './components/MoviesContainer'
const App=(props)=>{
    return (
        <>
            <h1 className='mt-3 text-center text-capitalize text-danger'>my big movie app</h1>
            <MoviesContainer />
        </>
    )
}

export default App