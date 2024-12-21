"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from '@/app/about/About.module.css';
import ai from '@/public/ai.jpeg'

const skills = [
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', proficiency: 90 },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', proficiency: 85 },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', proficiency: 80 },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', proficiency: 75 },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', proficiency: 70 },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', proficiency: 85 },
  { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', proficiency: 80 },
  { name: 'AI & Robotics', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Artificial_intelligence.svg', proficiency: 65 },
];


const About: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <section className="abouts-section">
          <h1>Get To Know Me</h1>

          <div className='about-info'>
<p className='about-p'>Hello! I'm Iqra Abdul Qadir, a dedicated student specializing in Agentic AI and Robotics. My passion lies in exploring the realms of artificial intelligence and cutting-edge technology. With a strong foundation in these fields, I am committed to pushing the boundaries of innovation and contributing to the future of AI and robotics.

I am fluent in Urdu, Arabic, and English, which allows me to communicate effectively in diverse environments. I possess excellent leadership and teamwork skills, honed through various collaborative projects and initiatives. I hold a degree in Islamic Sciences and am currently studying at GIAIC. Additionally, I am a professional writer with a knack for crafting engaging and informative content.</p></div>

      <h2>Technical Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name} >
            <div className="skill-content" style={{ backgroundImage: `url(${skill.logo})` }}>
              <h3>{skill.name}</h3>
              <div className="proficiency-meter">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${skill.proficiency}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">{skill.proficiency}%</text>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
    </div>
  );
};

export default About;

      {/* <div className={styles.innerContainer}>
        
        <p className={styles.intro}>
          Hello! I'm <strong>Iqra Abdul Qadir</strong>, a dedicated student in Agentic AI and Robotics with a passion for artificial intelligence and cutting-edge technology.
        </p>
        
        <section className={styles.lang}>
          <h2 className={styles.subheading}>Multilingual Communication</h2>
          <p>I am fluent in <strong>Urdu, English, and Arabic</strong>, allowing me to connect with diverse audiences.</p>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.subheading}>Academic and Professional Background</h2>
          <ul className={styles.list}>
            <li><strong>Currently Enrolled in GIAIC:</strong> Studying Robotic and Agentic AI Engineering.</li>
            <li><strong>System Management Certification:</strong> Skilled in managing complex systems.</li>
            <li><strong>Specialization in Arabic:</strong> Deep understanding of the Arabic language.</li>
            <li><strong>Graduate of University of Islamic Sciences, Banori Town:</strong> Developed research and academic skills.</li>
            <li><strong>Saint Lawrence Government Girls College Graduate:</strong> Diverse academic foundation.</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.subheading}>Technical Expertise</h2>
          <p>Skilled in various technologies including:</p>
          <ul className={styles.list}>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js</li>
            <li>Artificial Intelligence and Robotics</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.subheading}>Personal Passions</h2>
          <p>I enjoy exploring new fields, reading, and community projects.</p>
        </section>
      </div>
    </section>
    </main>
    </div>
  );
};

export default About; */}
