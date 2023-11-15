import React from "react";
import Banner from "../Components/Nav/Banner/Banner";
import './About.css';
import CardItem from './CardItem';
const About = ()=>{
return(
    <>
      <Banner title="about" smtitle="About"/> 
    

      <div className='cards'>
      <h1>Checkout Epic Options</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://th.bing.com/th/id/R.cfa674a40df387884f35700045ef69e0?rik=IWPQNMpqofYrpw&riu=http%3a%2f%2fwww.onlyinyourstate.in%2fwp-content%2fuploads%2f2017%2f05%2fPopular-Temples-in-Tamil-Nadu-Brihadeshwara.jpg&ehk=x0BI8keXdUY5D2QzosgJdrSubHuL%2buunEWp7tQg5gyE%3d&risl=&pid=ImgRaw&r=0'
              text='Get your Medicines Delivered At your Door-Step'
              label='historic monuments'
              path='/DarshanRegistration'
            />
            <CardItem
              src='https://th.bing.com/th/id/OIP.R3e5xK9iMXtN4KHI6V9knAHaE7?pid=ImgDet&rs=1'
              text='A beautiful place'
              label='Kashmir'
              path='/KashmirPage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            
              src='https://digitalnomads.world/wp-content/uploads/2021/02/goa.jpg'
              text=''
              label='beaches'
              path='/BeachesPage'
            />

             <CardItem
              src='https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?pid=ImgDet&rs=1'
              text='Medical prescription for your Health issues'
              label='Hotels'
              path='/HotelPage'
            />
             
            <CardItem
              src='https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg'
              text='Benefits of Moving Towards online Consultation'
              label='Hill Stations'
              path='/HillStationPage'
            />
          </ul>
        </div>
      </div>
      </div>
      </>
);
}
export default About;