import React from "react";
import Banner from "../Components/Nav/Banner/Banner";
import { FormSelect } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faHeart, faMap, faSmile } from "@fortawesome/free-solid-svg-icons";
import './Contact.css';
const Contact = ()=>{
    return(
         <>
            <Banner title="Contact" smtitle="contact"/> 
            <section className="contact-us">
                <div className="container">
                <div className="row">
                <div className="col-1g-6 col-md-6">
                   <form>
                    <div className="form-control">
                        <input placeholder="your Name" />
                    </div>
                    <div className="form-control">
                        <input placeholder="your Email" />
                    </div>
                    <div className="form-control">
                        <input placeholder="your Phoneno" />
                    </div>
                    <select>
                        <option>select Option</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select>
                    <div className="form-control">
                        <textarea placeholder="Message" />
                    </div>
                    <button>Submit</button>
                   </form> 
                </div>
                <div className="col-1g-6 col-md-6">
                    <div className="side">
                        <div className="overlay">
                            <h3>Contact Us For Any Information</h3>
                            <li><FontAwesomeIcon icon={faMap}/>Location</li>
                            <hr></hr>
                            <p>K L Deemed to be University</p>
                            <li><FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
                            <p>2200031xxx@kluniversity.in</p>
                            <p>+91 90xxxxxxx91</p>
                            <li><FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                            <ul>
                                <li><FontAwesomeIcon icon={faHeart}/></li>
                                <li><FontAwesomeIcon icon={faSmile}/></li>
                                <li><FontAwesomeIcon icon={faGlobe}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
