'use client'
import React from "react";
import {useRouter }from "next/navigation";
import Image from "next/image"


const NavBar : React.FC = () => {

        const router = useRouter();

        const goToHome = () => {
            router.push('/');
        };

        const goToAbout = () => {
            router.push('/About');
        };

        const goToProjects = () => {
            router.push('/Projects');
        };

        const goToContact = () => {
            router.push('/Contact');
        };

        return(
            <nav className="navbar">
                <div> 
                    <Image onClick={goToHome} src="/mylogo.png" alt="Logo" width={50} height={50} className="logo" /> 
                    </div>
                <ul className="navbar-ul">
                    <li className="navbar-li"><button onClick={goToHome} className="navbar-button">Home</button></li>
                    <li className="navbar-li"><button onClick={goToAbout} className="navbar-button">About</button></li>
                    <li className="navbar-li"><button onClick={goToProjects} className="navbar-button">Projects</button></li>
                    <li className="navbar-li"><button onClick= {goToContact} className="navbar-button">Contact</button></li>
                </ul>
            </nav>

        );
    
};

export default NavBar;