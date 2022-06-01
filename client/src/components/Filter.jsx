import { useState, useContext } from "react"
import {categories} from "./CategorySection"
import {FaArrowRight} from 'react-icons/fa';
import { Action, Context } from './ContextProvider';
import "./css/doctorList.css"

const courses = [
  "MBBS",
  "MD",
  "BDMS",
  "MP",
  "BP",
  "BDS",
  "MDS",
  "others"
]
export default function Filter() {
    const filter = useContext(Context).state.filters;
    const [specialization, setSpecialization] = useState(filter.specialization || "others");
    const [fee, setFee] = useState(filter.fee || 2000);
    const [education, setEducation] = useState(filter.education || "others");
    const [search, setSearch] = useState(filter.search || "");
    const dispatch = useContext(Context).dispatch;

  return (
    <div className="filter">
        
        <div className="sectionInner">
            <form className="searchForm"
                onSubmit={(e)=> {
                    e.preventDefault();
                    dispatch({type: Action.FILTER, payload: {search,education, fee,specialization}})
                }}
            >
                <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)  }>
                    {
                        categories.map((cat, index)=> <option value={cat.text} key={index}>{cat.text}</option> )
                    }
                    <option value="others">specialization</option>
                </select>
                <select value={education} onChange={(e)=>setEducation(e.target.value)  }>
                    {
                        courses.map((course, index)=> <option value={course} key={index}>{course == "others" ? "education" : course}</option> )
                    }
                </select>
                <div className="rangeCover">
                    <input type="range" className="range"
                        min={100} max={2000} step={50} value={fee} 
                        onChange= {(e)=>setFee(e.target.value) } 
                        
                    />
                    <div className="rangeValue">{fee}</div>
                </div>
                <input type="text" className="searchInput"
                    value={search} placeholder="search..." 
                    onChange= {(e)=>setSearch(e.target.value) } 
                />
                <button type="submit"><FaArrowRight/></button>
            </form>
        </div>
    </div>
  )
}
