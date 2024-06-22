import logo from "../assets/logo.png"
import pepper from "../assets/peppersquare.svg"
import socials from "../assets/socials.svg"
import Button from "./Button"

const Footer = () => {
  return (
    <div className='footer' >
      <div className="footer-wrapper">
        <div className="details">
          <div className="logo">
            <img src={logo} alt="logo" height={130} width={100} />
          </div>
          <div className="school">
            <div className="name">
              DBTR National Higher Secondary School
            </div>
            <div className="tag">
              Virtuousness is Life
            </div>
            <br />
            <div className="desc">
              Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.
            </div>
          </div>
          <div className="links">
            <div className="linkTitle">
              QUICK LINKS
            </div>
            <div className="link">Admission</div>
            <div className="link">Alumini association</div>
            <div className="link">Donate</div>
            <div className="link">Events</div>
          </div>
          <div className="contact">
            <div className="linkTitle">CONTACT</div>
            <div className="addr">
            DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai, Tamilnadu – 609001
            <br />
            <br />
            +91.436.422.3272
            <br />
            <br />
            contact@nationalhighschool.in
            </div>
          </div>
          <div className="donate">
            <p className="donateText">Big or small, you can make an impact.</p>
            <Button className="solidButton" label='Donate ❤' />
          </div>
        </div>
        <br />
        <hr />
        <div className="designer">
          <div className="parent">

          <p className="c-rights" >© DBTR 2023, All Rights Reserved | Sitemap</p>
          Designed by &nbsp; 
          <img src={pepper} alt="PepperSquare" height={20}/>
          </div>

          <img src={socials} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer