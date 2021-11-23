const movieInitialState=[]

const movieReducer=(state=movieInitialState,action)=>{
    switch(action.type){
        case 'MOVIE_NAME':{
            return [...state,{...action.payload}]
        }
        case 'DELETE':{
            return state.filter((movie)=>{
                return movie.name!==action.payload
            })
        }
        default :{
            return [...state]
        }
    }
}

export default movieReducer