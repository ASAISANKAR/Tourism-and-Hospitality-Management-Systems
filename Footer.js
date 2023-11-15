import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Footer = ()=>{
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        setSubscribed(true);
    }
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <p>Every Step is a Journey</p>
                    
                    <div className="footer-contact">
                        <div className="footer-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="footer-text">
                            <h6>Contact us</h6>
                            <h4>+91 9346XXNXX</h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                       <h2>Quick links</h2>
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Booking">Booking</a></li>
                            <li><a href="/FAQ">Faqs</a></li>
                            <li><a href="/Team">Our team</a></li>
                            <li><a href="/FeedbackForm">Feedback From</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h2>Our Services</h2>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Subscribe</h2>
                        {subscribed ? (
                            <div>
                                <p>You have subscribed <FontAwesomeIcon icon="check" style={{ color: 'blue' }} /></p>
                            </div>
                        ) : (
                            <form>
                                <input type="email" placeholder="Enter email" />
                                <button type="button" onClick={handleSubscribe}>Subscribe now</button>
                            </form>
                        )}
                    </div>
                </div>
                </div>
        </footer>
    )

}
export default Footer;