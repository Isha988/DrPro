import React ,{useReducer, useEffect} from 'react'

const filter = JSON.parse(localStorage.getItem('filters'))

const initialState = {
    filters: filter || {
        specialization: "",
        fee:"",
        education:"",
        search : ""
    },
    doctors: [],
    loading: true
  };

const reducer = (state, action) =>{
    switch (action.type){
        case "filter" :
            return {...state , filters: {...action.payload}} 
        
        case "fetch" : 
            return {...state, doctors: action.payload, loading:false}
        
        default : 
            return state
    }
}

const Action = {
    FILTER: "filter",
    FETCH: "fetch",
    SEARCH: "search"
}

const Context = React.createContext();

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    localStorage.setItem('filters', JSON.stringify(state.filters))

    const query = Object.keys(state.filters)
    .filter(key => {
        if(state.filters[key] !== "" ) return key;
    })
    .map(key => `${key}=${state.filters[key]}`)
    .join("&")
    
    fetch(`/doctorsList${query && "?"+query}`)
      .then(response => response.json())
      .then(json=> {
          dispatch({type: Action.FETCH, payload: json})
      })
    
  }, [state.filters]);

  return (
    <Context.Provider
        value={{
            state,dispatch
        }}
    >
        {props.children} 
    </Context.Provider>
  )
}

export {ContextProvider, Context, Action};
