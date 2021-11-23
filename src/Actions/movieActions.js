export const movieName=(name)=>{
    return {
        type:'MOVIE_NAME',
        payload:name
    }
}

export const remove=(movieName)=>{
    return {
        type:'DELETE',
        payload:movieName
    }
}