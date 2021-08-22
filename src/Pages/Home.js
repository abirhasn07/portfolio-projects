import React from 'react'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
        </>
    )
}

export default Home
