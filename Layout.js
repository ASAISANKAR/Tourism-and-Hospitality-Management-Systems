import React, { Fragment } from "react";
import Navbars from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = ()=>{
    return(
        <Fragment>
       <Navbars/>
       <main>
        <Outlet/>
       </main>
       <Footer/>
       </Fragment>
    )
}

export default Layout;