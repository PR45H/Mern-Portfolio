import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Project from './Project'
import Contact from './Contact'

const Home = () => {
    return (
        <div className='px-20 sm:px-5 lg:px-5 bg-primary selection:bg-selection'>
            <Header />
            <Intro />
            <About />
            <Project />
            <Contact />
        </div>
    )
}

export default Home