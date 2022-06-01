import {SectionHeader} from "./SmallComponents"
import aboutImage from "../assets/about.png"
import "./css/About.css"

export default function About() {
  return (
    <section className="about">
        <div className="sectionInner">
            <div className="aboutText">
                <SectionHeader 
                    title="about drpro" 
                    subtitle="Bring care to your home with one click" />
                <p className="para">
                    Lorem ipsum dolor sit amet consectur adipiscing elit 
                    sed eiusmod ex tempor incididunt labore dolore magna 
                    aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                </p>
            </div>
            <div className="aboutImage">
                <img src={aboutImage}></img>
            </div>
        </div>
    </section>
  )
}
