import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footertop">
        <div className="logo">
          <img src={logo} alt="" />
          <span className="heading">drpro</span>
        </div>
        <p className="para">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .
        </p>
      </div>
      <div className="footerbottom">
        <p className="para">
           Docpro © 2022 All Right Reserved
        </p>
      </div>
    </footer>
  )
}


