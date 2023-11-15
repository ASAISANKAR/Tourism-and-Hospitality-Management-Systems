import { Fragment } from 'react';
import './App.css';
import Home from './Pages/Home';

import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Nav/Layout/Layout';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Team from './Pages/Team';
import Booking from './Pages/Booking';
import FAQ from './Pages/FAQ';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Services from './Pages/Services';
import KashmirPage from './Pages/KashmirPage';
import Life from './Pages/Life';
import DarshanRegistration from './Pages/DarshanRegistration';
import AdminLogin from './Pages/AdminLogin';
import AdminPage from './Pages/AdminPage';
import ResortBooking from './Pages/ResortBooking';
import BeachesPage from './Pages/BeachesPage';
import HotelPage from './Pages/HotelPage';
import HillStationPage from './Pages/HillStationPage';
import FeedbackForm from './Pages/FeedbackForm';





const routes =createBrowserRouter(createRoutesFromElements(


  <Route path='/' element={<Layout />}>
    <Route index path='/' element={<Home />} />
    <Route index path='/home' element={<Home />} />
    <Route index path='/Contact' element={<Contact />} />
    <Route index path='/About' element={<About/>} />
    <Route index path='/Team' element={<Team/>} />
    <Route index path='/Booking' element={<Booking/>} />
    <Route index path='/FAQ' element={<FAQ/>} />
    <Route index path='/Login' element={<Login/>}/>
    <Route index path='/Registration' element={<Registration/>}/>
    <Route index path='/Services' element={<Services/>}/>
    <Route index path='/DarshanRegistration' element={<DarshanRegistration/>}/>
    <Route index path='/Life' element={<Life/>}/>
    <Route index path='/transport' element={<Services/>}/>
    <Route index path='/AdminLogin' element={<AdminLogin/>}/>
    <Route index path='/Adminpage' element={<AdminPage/>}/>
    <Route index path='/KashmirPage' element={<KashmirPage/>}/>
    <Route index path='/ResortBooking' element={<ResortBooking/>}/>
    <Route index path='/BeachesPage' element={<BeachesPage/>}/>
    <Route index path='/HotelPage' element={<HotelPage/>}/>
    <Route index path='/HillStationPage' element={<HillStationPage/>}/>
    <Route index path='/FeedbackForm' element={<FeedbackForm/>}/>
  </Route>
   
  
))





function App() {
  return (
    <Fragment>
          <RouterProvider router={routes} />
          </Fragment>
          
  );
}

export default App;