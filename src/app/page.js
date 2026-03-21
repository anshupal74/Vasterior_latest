import React, { Fragment } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import BrandPage from '@/components/BrandPage';
import About from '@/components/About';
import ServicesPage from '@/components/ServicePage';
import PortfolioPage from '@/components/PortfolioPage';
import BlogsPage from '@/components/BlogsPage';
import CollaboratePage from '@/components/CollabratePage';
import TestimonialsPage from '@/components/TestimonialsPage';
const page = () => {
  return (
    <Fragment>
      <HomePage />
      <BrandPage />
      <About />
      <ServicesPage />
      <PortfolioPage />
      <BlogsPage />
      <CollaboratePage />
      <TestimonialsPage />
    </Fragment> 
  )
};
export default page 



