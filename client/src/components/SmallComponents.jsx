import {Link} from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa';
import {BiRupee} from "react-icons/bi"
import {Context, Action} from "./ContextProvider";
import { useContext} from "react";

function Category({url, text}) {

  const dispatch = useContext(Context).dispatch;
  return (
    <section className="category">
        <img src={url} alt={text} />
        <h3>{text}</h3>
        <Link to={`/doctors?specialization=${text}`} onClick = {
          () => dispatch({type: Action.FILTER, payload: {specialization : text}})
        }><FaArrowRight/></Link>
    </section>
  )
}


function Testimonial({views, url, name, subhead}) {
  return (
    <div className="testimonial">
      <p className="para views">{views}</p>
      <div className="person">
        <img src={url} alt="" />
        <div>
          <h3 className="heading">{name}</h3>
          <p className="para">{subhead}</p>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({title, subtitle}) {
  return (
    <header className="sectionHeader">
        <h2 className="sectionTitle">{title}</h2>
        <p className="sectionSubtitle heading">{subtitle}</p>
    </header>
  )
}

function Atag({link, text, onClick}){
  return(
    <Link to={link} className="btn" onClick = {onClick}>
      {text} <FaArrowRight/>
    </Link>
  )
}

function DoctorCard({
  name,photo, specialization, designation, email, mobile,clinic, fee, education
  }){
  return(
    <section className="doctorCard">
      <img src={photo} alt="" />
      <div>
        <p className="heading">{name}</p>
        <p className="para"><span>speciality</span> : {specialization}</p>
        <p className="para"><span>designation</span> : {designation}</p>
        <p className="para"><span>edu</span> : {education}</p>
      </div>

      <div>
        <p className="para"><BiRupee className="yellow"/>{fee}</p>
        <p className="para"><span>email</span> : {email} </p>
        <p className="para"><span>mobile</span> : {mobile}</p>
        <p className="para"><span>clinic</span> : {clinic}</p> 
      </div>
    </section>
  )

}

export {Category, Testimonial, SectionHeader, Atag, DoctorCard}


