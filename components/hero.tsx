"use client";
import React from 'react'
import Image from 'next/image'
import pp from '../public/pp.png'
import { useRouter } from "next/navigation";


const Hero : React.FC = () => {
    const router = useRouter();

    const goToHome = () => {
        router.push('/');
    };

    const goToAbout = () => {
        router.push('/About');
    };

    const goToProjects = () => {
        router.push('/Projects');
    }

    const goToContact = () => {
        router.push('/Contact');
    }
    return (
        <section className='hero min-h-screen'>
            <div className="hero-content">
                <h1 className='typing-animation'>HI, I'M IQRA ABDUL QADIR</h1>
                <h2>Certified Robotic & Agentic AI Engineering Student</h2>
                <p>Short introduction or bio goes here. Highlight your skills, experience, or what makes you unique. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium odit natus adipisci quod sequi ullam.</p>
                <div className="cta-buttons">
                    <button onClick={goToContact} className="cta-button">Contact Me</button>
                    <button onClick={goToProjects} className="cta-button">View My Work</button>
                </div>
            </div>

           
            <div className='image'>
                <Image src='/pp.png' alt='robot' width={500} height={550} />
            </div>
            
        </section>
    );
}

export default Hero;