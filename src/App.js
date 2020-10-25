import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { SectionAbout } from './components/SectionAbout';
import { SectionOne } from './components/SectionOne';
import { SectionReservation } from './components/SectionReservation';



const App = () => {

   
    return (
        <>
        <Header />
        <Section />
        <SectionOne />
        <SectionReservation />
        <SectionAbout/>
        <Footer/>
            
        </>
    )
}

export default App;
