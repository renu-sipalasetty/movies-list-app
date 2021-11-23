import React from 'react'
import { useSelector } from 'react-redux'

const MoviesStatus=(props)=>{
    const data=useSelector((state)=>{
        return state.movie
    })
    const sortRank=data.slice(0)
    sortRank.sort(function(a,b) {
        return a.rank-b.rank
    })
    console.log('sorted rank',sortRank[0])
    return (
        <>
            <h1 className='text-danger'>Movies Stats</h1>
            <h3>Total Movies - <span className='text-danger'>{data.length}</span></h3>
            {Object.keys(sortRank).length !==0 && <h4>#Top Movie Is - <span className='text-danger'>{sortRank[0].name}</span></h4>}
                    
        </>
    )
}
export default MoviesStatus