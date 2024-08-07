import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'

const Home = () => {
    return (
        <div className='px-20 bg-primary selection:bg-selection'>
            <Header />
            <Intro />
            <About />
        </div>
    )
}

export default Home