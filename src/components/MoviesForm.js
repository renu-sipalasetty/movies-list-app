import React,{useState} from "react"
import {useDispatch} from 'react-redux'
import { movieName } from "../Actions/movieActions"

const MoviesForm=(props)=>{
    const [name,setName]=useState('')
    const [rank,setRank]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr === 'name'){
            setName(e.target.value)
        }
        else if(attr==='rank'){
            setRank(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            name:name,
            rank:Number(rank)
        }
        dispatch(movieName(data))
        setName('')
        setRank('')
    }
    return (
        <div className='ml-3 top' >
            <h3>Add Movie</h3>
            <form autocomplete='off'  onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input 
                        type='text'
                        value={name}
                        name='name' 
                        className='form-control'
                        placeholder='Enter movie name'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group mt-2'>
                    <input 
                        type='text'
                        value={rank}
                        name='rank'
                        className='form-control'
                        placeholder='Enter IMDB Ranking'
                        onChange={handleChange}
                    />
                </div>
                <input 
                    type='submit'
                    className='mt-2 btn btn-block btn-primary '
                    value='Add'
                />
            </form>
        </div>
    )
}
export default MoviesForm