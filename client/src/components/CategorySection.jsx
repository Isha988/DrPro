import {SectionHeader , Category, Atag} from "./SmallComponents"
import "./css/CategorySection.css"
import {Context, Action} from "./ContextProvider";
import { useContext} from "react";


//images
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c6 from "../assets/c6.png"
import c7 from "../assets/c7.png"
import c8 from "../assets/c8.png"


//categories list
const categories = [
  {
    text: "cardiology",
    url: c1
  },
  {
    text: "dentistry",
    url: c2
  },
  {
    text: "dermatology",
    url: c3
  },
  {
    text: "general physician",
    url: c5
  },
  {
    text: "gynecology",
    url: c6
  },
  {
    text: "homeopathy",
    url: c7
  },
  {
    text: "internal medicine",
    url: c8
  },
  {
    text: "ophthalmology",
    url: c4
  }
]
export default function CategorySection() {
  const dispatch = useContext(Context).dispatch;
  
  return (
    
    <section className="categorySection"> 
      <div className="sectionInner">
        <SectionHeader title="category" subtitle="Browse by specialist" />
        <div className="categoryCover">
          {
              categories.map((category, index) => 
                <Category {...category} key={index}/>)
            } 
        </div>
        <Atag link="/doctors" text="all doctors" onClick = {
                  () => dispatch({type: Action.FILTER, payload: {
                    specialization: "",
                    fee:"",
                    education:"",
                    search : ""
                  }})
                }/>
      </div>  
    </section>
  )
}

export {categories};

