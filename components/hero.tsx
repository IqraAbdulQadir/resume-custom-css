"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";


const Hero : React.FC = () => {
    const router = useRouter();

    const goToProjects = () => {
        router.push('/Projects');
    }

    const goToContact = () => {
        router.push('/Contact');
    }
    return (
        <section className='hero min-h-screen'>
            <div className="hero-content">
                <h1 className='typing-animation'>HI, I AM IQRA ABDUL QADIR</h1>
                <h2>Certified Robotic & Agentic AI Engineering Student</h2>
                <p>Passionate about growth and innovation, I specialize in Agentic AI and robotics. Fluent in multiple languages and a professional content writer, I thrive on turning complex challenges into impactful solutions. Let&#39;s connect and create something extraordinary!</p>
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