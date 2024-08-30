import React, { useRef } from "react"
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import event_1 from "../../assets/event_1.jpeg"
import event_2 from "../../assets/event_2.jpeg"
import event_3 from "../../assets/event_3.jpeg"
import event_4 from "../../assets/event_4.jpeg"
import white_arrow from "../../assets/white-arrow.png"

const Testimonials=()=>{  
 
  const slider=useRef();
  let tx=0;
  const slideForward=()=>{
    if(tx>-50) { // Updated logic
      tx -= 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
 }
  
  const slideBackward=()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  
  
  return(
    <div className="testimonials">
      <img src= { next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src= { back_icon} alt="" className="back-btn" onClick={slideBackward}/>

      <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={event_1 }  alt="" />
              
          </div> 
            <p> Katra, celebrated the 78th Independence Day with national fervour and exemplary enthusiasm. On the occasion, Prof. Pragati Kumar, the Vice Chancellor of Shri Mata Vaishno Devi University, unfurled the tricolour flag.</p>
        </div>
        </li>

        <li>
          <div className="slide">
            <div className="user-info">
              <img src={event_2}  alt="" />
              
          </div> 
            <p>The NSS Unit of SMVDU organized an  online expert talk by Mr. Prateek Khandelwal, the Founder and Managing Director of RampMyCity. The session,  focused on creating a more inclusive society for persons with disabilities.</p>

        </div>
        </li>

        <li>
          <div className="slide">
            <div className="user-info">
              <img src={event_3 }  alt="" />
             
          </div> 
           <p>SMVDU is hosting an NEP Orientation & Sensitization Programme from August 5th to 14th, 2024. This 8-day online programme will feature two live sessions daily, each lasting 90 minutes from 2:30 PM to 5:30 PM. </p>

        </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={event_4 }  alt="" />
              
          </div> 
            <p>It focuses on the emerging technologies, fields and Industry 4.0 domains- Additive Manufacturing, Robotics, Artificial Intelligence, Augmented Reality, Programmable Logic Controller and many more.</p>

        </div>
        </li>
        
      </ul>
      </div>
      
      {/* <button className="btn dark-btn">See more here <img src={white_arrow} alt=""/></button> */}
    
    </div>
  )
}

export default Testimonials