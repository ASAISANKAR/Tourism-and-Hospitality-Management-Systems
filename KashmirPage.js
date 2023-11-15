import React from "react";
import Banner from "../Components/Nav/Banner/Banner";
import './KashmirPage.css';
import CardItem from './CardItem';
const KashmirPage = ()=>{
return(
    <>
      <Banner title="about" smtitle="About"/> 
    

      <div className='cards'>
      <h1>Kashmir Resorts</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://media-cdn.tripadvisor.com/media/photo-s/0c/4d/66/2d/dining-area.jpg'
              text='Sonmarg,kashmir'
              label='AHSAN MOUNT RESORT'
              path='/ResortBooking'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVCcxtXCpCgITdSW7pBAFt1diuH0fj4K0aQ&usqp=CAU'
              text='Gulmarg,kashmir'
              label='GULMARG RESORTS'
              path='/ResortBooking'
            />
             <CardItem
              src='https://media-cdn.tripadvisor.com/media/photo-s/0b/9d/54/fe/kashmir-mahal-resorts.jpg'
              text='Kashmir'
              label='KASHMIR MAHAL RESORT'
              path='/ResortBooking'
            />
          </ul>
        </div>
      </div>
      </div>
      </>
);
}
export default KashmirPage;