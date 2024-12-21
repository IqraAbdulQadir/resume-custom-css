"use client";
import React from 'react';
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from "@/components/hero"

const HomePage : React.FC = () => {
  return (
<div className='page-container'>
  <NavBar />
  <div className='content-wrap'>
<Hero />
</div>
  <Footer />
</div>

  )
}

export default HomePage;
