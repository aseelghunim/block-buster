import React from 'react';
import Header from './header/Header';
import Footer from './../footer/Footer'
import MoviesHomeSection from './MoviesHomeSection';
import TvHomeSection from './TvHomeSection';

export default function Home() {
  return (
    <>
        <Header />
        <MoviesHomeSection />
        <TvHomeSection />
        <Footer />
    </>
  )
}
