import React from 'react'
import About from './About'

const Intro = () => {
    return (
            <div className="h-fit bg-primary flex flex-col items-start text-wrap justify-center gap-8 pt-8">
            <h1 className="text-xl font-semibold text-center text-white">
                Hi, I am
            </h1>
            <p className="text-secondary font-bold text-6xl sm:text-3xl lg:text-4xl text-center">
                Prashant Babu
            </p>
            <p className="text-white text-6xl font-bold sm:text-xl lg:text-4xl text-center">
                I build things for the web
            </p>
            
            <div className="h-fit text-wrap">
                <p className="text-white text-s font-medium text-opacity-60 w-3/4 lg:w-full">
                    I’m a passionate Full Stack Web Developer specializing in the
                    MERN stack. As a fresher, I’m enthusiastic about joining a
                    dynamic team and contributing to impactful solutions. Let’s connect and
                    create something amazing together!
                </p>
            </div>

            <div>
                <button className="border-2 border-tertiary px-10 py-4 text-lg text-tertiary rounded-md">Get Started</button>
            </div>
        </div>
    )
}

export default Intro