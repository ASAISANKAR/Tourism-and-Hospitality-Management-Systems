import React from 'react';
import headerimg from '../Assets/Tajmahal.jpg';
import './Home.css';



const Home =  ()=>{
    return(

  
        <header>
           
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <h4>Let us plan you a perfect</h4><h1>India Holiday</h1>
                 <h2>HAVE A HEALTHY AND REMEMBERABLE HOLIDAY </h2>
                        <button><a href='#'>Read More</a></button>
                        <span>$$</span>
                    </div>
                    <div className='col-lg-6 col-md-6 '>
                    <div className="header-box">
                        <img src={headerimg} />
                         
                    </div>
                         
                    </div>
                 </div>
            </div>
        
        </header>
        
    )
}
export default Home;
