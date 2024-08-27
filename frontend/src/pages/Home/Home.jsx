import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'

const Home = () => {
    const {portfolioData } = useSelector((state)=> state.root)
    return (
        <div>
            { portfolioData && (
            <div className='px-20 sm:px-5 lg:px-5 bg-primary selection:bg-selection'>
                <Header />
                <Intro />
                <About />
                <Project />
                <Contact />
                <Footer />
                <LeftSider />
            </div> )}
        </div>    
    )
}

export default Home