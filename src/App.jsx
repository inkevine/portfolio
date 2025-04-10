import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css'
import Hero from './components/Hero';
import Projects from './components/Projects'
import Footer from './components/Footer';
import MySkills from './components/MySkills';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <MySkills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
