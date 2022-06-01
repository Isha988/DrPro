import { Link, useLocation} from "react-router-dom";
import {Context} from "./ContextProvider";
import { useContext} from "react";
import {Atag} from "./SmallComponents";

export default function Nav() {
    const path = useLocation().pathname;
    const dispatch = useContext(Context).dispatch;
    
      
  return (
    <nav className={`nav`}>
        <div className="sectionInner">
        <div>
            <Link to="/" className={`link ${path=="/"&& "active"}`}> Home </Link>
            <Link to="doctors" className={`link ${path=="/doctors"&& "active"}`} 
                onClick = {
                  () => dispatch({type: "filter", payload: {
                    specialization: "",
                    fee:"",
                    education:"",
                    search : ""
                  }})
                }            
            >Doctors</Link>
        </div>
        
        <Atag link="#" text="call 666 986"/>
        </div>
    </nav>
  )
}





