import React,{useState} from "react";
import {useSelector} from 'react-redux'
import MovieCard from "./MovieCard";
const MovieList=(props)=>{
    const [search,setSearch]=useState('')
    const [order,setOrder]=useState('')
    const [sortList,setSortList]=useState([])
    let list=useSelector((state)=>{
        return state.movie
    })
    
    const handleChange=(e)=>{
        const res=e.target.value
        setOrder(res)
        sorting(res)
    }
    const sorting=(order)=>{
        if(order==='z-a'){
            list.sort((a,b)=>{
                let x=a.name.toLowerCase()
                let y=b.name.toLowerCase()
                console.log( 'x', x, 'y', y)
                return (x<y?x>y?1:0:-1)
            })
        }
        if(order==='a-z'){
            list.sort((a,b)=>{
                let x=a.name.toLowerCase()
                let y=b.name.toLowerCase()
                console.log( 'x', x, 'y', y)
                return (x<y?-1:x>y?1:0)
            })
            console.log('a-z',list)
        }
        if(order==='des'){
            list.sort((a,b)=>{
                return b.rank-a.rank
            })
        }
        if(order==='asc'){
            list.sort((a,b)=>{
                return a.rank-b.rank
            })
        }
    }
    
    
    const handleSearch=(e)=>{
        const res=e.target.value
        setSearch(res)
        searching(res)
    }
    
    const searching=(find)=>{
       if(find!==''){
        const res=list.filter((ele)=>{
            return ele.name.toLowerCase().includes(search)
        })
        setSortList(res)
       }
        
    }
    return (
        < >
            <form className='d-flex justify-content-between align-items-center'>
                <div className='form-group'>
                    <input 
                        name='search'
                        value={search}
                        type='text'
                        className='form-control-sm'
                        placeholder='Search by movie name...'
                        onChange={handleSearch}
                    />
                </div>
                <div className='form-group'>
                    <select  name='sort' value={order} onChange={handleChange} >
                        <option>Order By</option>
                        <option value='a-z' >A-Z</option>
                        <option value='z-a' >Z-A</option>
                        <option value='asc' >Ascending</option>
                        <option value='des' >Descending</option>
                    </select>
                </div>
            </form>
            <div >
                {
                    (sortList).length !==0 ?
                    sortList.map((movie,i)=>{
                    return  <MovieCard movie={movie} key={i} />
                    })  :
                    <div className='row'>
                        {
                            list.map((movie,i)=>{
                                return (
                                    <div className='col-lg-6 mx-3 my-2'>
                                          <MovieCard {...movie} key={i} />
                                    </div>
                                )
                            })
                        }
                    </div>
                                        
                }
            </div>
        </>
    )
}
export default MovieList