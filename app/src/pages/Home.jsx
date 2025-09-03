// import {NavBar} from '../components/NavBar';
//import {Main} from '../components/main';
//import {Footer} from '../components/Footer';
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import Main from "./../components/main";
import React from 'react';
import Products from "../components/Products";

function Home() {
    return(
        <>
         <NavBar />
         <Main />
         <Products />
         <Footer />
        </>
    )
}

export default Home;