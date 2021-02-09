import React, {useState} from 'react'
import NavBar from '../Navbar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'
import Sidebar from '../Sidebar'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
    setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
        <NavBar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
            <HeroH1>Burgers And Wings</HeroH1>
            <HeroP>We Do Deliveries</HeroP>
            <HeroBtn>View Menu</HeroBtn>
            </HeroItems>
        
        </HeroContent>
        </HeroContainer>
    );
};

export default Hero


