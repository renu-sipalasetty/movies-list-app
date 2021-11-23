import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../Actions/movieActions";
const MovieCard=(props)=>{
    const {name,rank}=props
    const dispatch=useDispatch()
    const handleDelete=(name)=>{
        dispatch(remove(name))
    }
    return (
                    <div className='card'>
                            {/* place image here */}
                            <img     
                                src='https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                alt='pic' 
                                className='img-fluid img-thumbnail'
                            />
                            <div className='card-header text-center text-capitalize text-info'>
                                <h5>{name}</h5>
                            </div>
                            <div className='card-body bg-secondary text-center text-light'>
                                <h4>{rank}</h4>
                                <button className='btn btn-md btn-warning' onClick={()=>{handleDelete(name)}}>Delete</button>
                            </div>
                    </div>
    )
}
export default MovieCard