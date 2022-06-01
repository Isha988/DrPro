import { useCallback, useEffect, useState, useContext } from 'react';
import {FaArrowRight} from 'react-icons/fa';
import debounce  from 'lodash.debounce';
import {Link, useNavigate} from "react-router-dom"
import "./css/Header.css";
import { Action, Context } from './ContextProvider';


 function Header() {
   const [search, setSearch] = useState("");
   const [matches, setMatches] = useState([]);
   const dispatch = useContext(Context).dispatch;
   const navigate = useNavigate();

   function inputChange(e){
     setSearch(e.target.value);

   }

   const sendQuery = query => {
      const input = query.trim();
      const regex = /[^a-zA-z0-9 ]/g;
      const regex2 = /\\/g ;
      if(!input || input.match(regex) || input.match(regex2)){
          return setMatches([]);
      }
      fetch(`/search?search=${input}`)
      .then((res) => res.json())
      .then((json) => {
        setMatches(json)});  
   };

      const updateQuery = () => {
        // A search query api call.
        sendQuery(search)
    };

    const delayedQuery = useCallback(debounce(updateQuery, 500), [search]);


    useEffect(() => {
      delayedQuery();

      // Cancel the debounce on useEffect cleanup.
      return delayedQuery.cancel;
    }, [search, delayedQuery]);

    function handleSubmit(e){
      e.preventDefault();
      dispatch({type: Action.FILTER, payload: {search: search}})
      navigate(`/doctors?search=${search}`) 
    }
  
  return (
    <header className="heroImage">
        <div className="overlay"></div>
        <div className="heroText">
            <h1>Find Nearest Doctor.</h1>
            <p>Amet consectetur adipisicing elit sed do eiusmod</p>
            <form className="searchForm" onSubmit = {handleSubmit}>
                <input  
                  id="searchInput" type="text" placeholder="Ex. Name, Specialization..." 
                  value = {search} onChange={inputChange}></input>
                <button type="submit"><FaArrowRight/></button>
                      <div className="searchList">
                  {matches.map(match => 
                    <Link to={`/doctors?search=${match.word || match.name}`} 
                      onClick={() => dispatch({type: Action.FILTER, payload: {search: match.word || match.name}})}
                      className="searchItem"  key={match.id}
                    >
                      {match.word || match.name}
                    </Link>
                  )}
                </div>
            </form>
        </div>

    </header>
  )
}

function SmallHeader() {
  return (
    <header className="smallHeader">
        <div className="overlay"></div>
        <div className="heroText">
            <h1 >Our Doctors</h1>
        </div>
    </header>
  )
}

export {Header, SmallHeader}