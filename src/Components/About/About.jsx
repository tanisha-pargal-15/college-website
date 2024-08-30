import React from "react"
import "./About.css"
import about_img from "../../assets/prophoto2.png"
import play_icon from "../../assets/play-icon.png"


const About=({setplayState})=>{
  return(
    <>
    <div className="about">
      <div className="about-left">
      <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setplayState(true)} } />
      </div>
      <div className="about-right"> 
      <h3>ABOUT UNIVERSITY </h3>
      <h2>Nuturing Tomorrow's Leaders Today </h2>
     <p>Shri Mata Vaishno Devi University was established under an Act of J&K State Legislature in 1999 as fully residential and technical university, the first of its kind in J&K. Recognized by UGC under Section 2(f) & 12(B) of the UGC Act of 1956, the university receives funding from UGC. The university ranked 26th among Architecture Institutions, 101-150 among Engineering Institutions and 151-200 amongest top Universities in National Institutional Ranking Framework (NIRF 2023) declared by the MHRD, Govt. of India.</p>
    <p>The University is located on 470 acres of land in the lap of Trikuta Hills, the abode of Shri Mata Vaishno Devi at about 2700 feet above the sea level. The surrounding green hills and the perennial stream of Jhajjar in the east minimize the effects of hot and cold winds and produce a pollution free atmosphere on the campus.</p>
      </div>
       
   
    </div>
    <div className="values-vision-mission">
        <div className="section core-values">
          <h2>Core Values</h2>
          <p>Academic Integrity and Accountability.</p>
          <p>Respect and Tolerance for the views of every Individual.</p>
          <p>Attention to issues of National relevance as well as of global concern.</p>
          <p>Appreciation of intellectual excellence and creativity.</p>
          <p>Ceaseless aptitude of scientific exploration.</p>
        </div>

        <div className="section vision">
          <h2>Vision of the University</h2>
          <p>
            Establishment of a Scientific & Technical University of Excellence
            to nurture young talented human resources for the service of Indian
            Society & World at large preserving the integrity and sanctity of
            human values.
          </p>
        </div>

        <div className="section mission">
          <h2>Mission of the University</h2>
          <p>
            The Mission of the University is the pursuit of Education,
            Scholarship and Research and its application to the Society at the
            highest International levels of excellence.
          </p>
        </div>
      </div>
     </>
  )

}
export default About