import React from "react";
import Banner from "../Components/Nav/Banner/Banner";
import './About.css';
import CardItem from './CardItem';

const Services = ()=>{
return(
    <>
     <Banner title="Services" smtitle="Services"/> 
      
    

      <div className='cards'>
      <h1>Checkout Epic Options</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'
              text='Get your Medicines Delivered At your Door-Step'
              label='Accommodation Services'
               path='/Hotel'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8utGVRbNWKvSDVjyaZYd-bNOgQkhHLuz1jFJChuOc&s'
              text='Book a Video Consultation'
              label='Food and Beverage Services'
              path='/TransportationApp'
            />
               
               <CardItem
              src='https://www.csdtitsolution.com/images/transport.jpg'
              text='Book a Video Consultation'
              label='Transportation Services'
              path='/TransportationApp'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
            
              src='https://5.imimg.com/data5/OZ/SL/CA/SELLER-76819144/adventure-activity-services-500x500.jpg'
              text='Medical prescription for your Health issues'
              label='Tour and Activity Services'
              path='/services'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejApot4Pi_2KSWjs_t17aVc2qQkQ2BxHLnhVTciu-c1o7FtRmlFKDkRotIoLiUUUrj9E&usqp=CAU'
              text='Benefits of Moving Towards online Consultation'
              label='Event and Conference Services'
              path='/card'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HuvnIYX-NdPiDJmEjl-sMUQpxvJj4N1Wpg&usqp=CAU'
              text='Get your E-Prescription for your Issues.'
              label='Travel Planning and Information Services'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      </div>
      </>
);
}
export default Services;
