import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'

const Home = () => {
    return (
        <div className='px-20 sm:px-5 lg:px-5 bg-primary selection:bg-selection'>
            <Header />
            <Intro />
            <About />
            <Project />
            <Contact />
            <Footer />
            <LeftSider />
        </div>
    )
}

export default Home