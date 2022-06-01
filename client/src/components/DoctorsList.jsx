import {Context} from "./ContextProvider";
import { useContext } from "react";
import { DoctorCard } from "./SmallComponents";
import "./css/doctorList.css"


export default function DoctorsList() {
    const state = useContext(Context).state;
  return (
    <section className="doctorsList">
        <div className="sectionInner">
       {   
           (!state.loading && !state.doctors.length) ? (<div>No result found</div>) : 
           ((!state.loading) && state.doctors.map(doctor =>
            <DoctorCard {...doctor} key = {doctor.id}/>))
       }
        </div>
    </section>
  )
}