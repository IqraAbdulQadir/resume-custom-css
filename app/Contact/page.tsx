"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { brotliDecompress } from 'zlib';


const ContactPage: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <section className="contact-section">
          <div className="split-screen">
            <div className="left-side"> 
              
              <h2>Get In Touch!</h2>
            
              <p style={{border: '2px solid purple', borderRadius: '20px'}}>Email: <a href="mailto:iqraabdulqadir05@gmail.com" className='Link'>Iqraabdulqadir05@gmail.com</a></p>
              <p style={{border: '2px solid purple', borderRadius: '20px'}}>Phone: <a href="tel:+923212825290" className='Link'>+923212825290</a></p>
              <div className="social-media" >
                <a href="https://github.com/IqraAbdulQadir " target="_blank" rel="noopener noreferrer">
                  <img src="/Github.svg" alt="Github" style={{backgroundColor: 'purple', borderRadius: '50px'}} />
                </a>
                <a href="https://discord.com/channels/@bookiecookie0455_66894" target="_blank" rel="noopener noreferrer">
                  <img src="/Discord.svg" alt="Discord" style={{ border: '2px solid purple', borderRadius: '50px'}} />
                </a>
                <a href="https://www.linkedin.com/in/iqra-abdul-qadir-735583301/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin.svg" alt="LinkedIn" style={{border: '2px solid purple', borderRadius: '50px'}} />
                </a>
  
              </div>
            </div>
            <div className="right-side">
              <div className='vertically-center'>
              <h2>Drop A Message</h2>
              <form className="contact-form">
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
