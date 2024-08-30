import React from"react"
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
const Contact=()=>{
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
     

      // Simulate a 2-second delay
      setTimeout(() => {
        setResult("Form Submitted Successfully");
        event.target.reset();
    }, 2000);
    
    }

  
  return(
    <div className="contact">
      <div className="contact-col"> 
      <h3> Send a message <img src={msg_icon} alt=""/>  </h3>
      <p> Feel freee to reach out through Contact form or find our contact information below.</p>
      <p>Students can collect their Fax on Fax Number: 01991-285732, located at the office of Dean of Students.</p>

        <ul>
        <li> <img src={mail_icon} alt="" />info@smvdu.ac.in</li>
          <li > <img src={phone_icon} alt="" />01991- 285524(08 lines), 
          +91-9419068730</li>
          <li> <img src={location_icon} alt="" />Shri Mata Vaishno Devi University Campus,
Sub-Post Office, Katra,
Jammu and Kashmir – 182320</li>
        </ul>


        
      </div>
       <div className="contact-col"> 
       <form onSubmit={onSubmit}>
         <label>Your name</label>
         <input type="text"name="name" placeholder="Enter Your Name" required/>
         <label>Phone Number</label>
         <input type="number"name="phone" placeholder="Enter Your Phone Number" required/>
<label>Write your message here</label>
         <textarea name="message" row="6" placeholder="Enter Your Message" required></textarea>

         <button type="submit" className="btn dark-btn"> Submit Now <img src={white_arrow}alt="" /></button>
       </form>
         <span> {result}</span>
       </div>
    </div>
  )
}
export default Contact