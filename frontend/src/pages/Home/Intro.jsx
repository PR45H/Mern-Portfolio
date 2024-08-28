import React from 'react'
import { useSelector } from 'react-redux'

const Intro = () => {
    // get the portfolioData from the redux store
    const { portfolioData } = useSelector((state) => state.root)
    const {intro}  = portfolioData
    const {welcomeText , firstName, lastName, caption, description} = intro[0]
    
    return (
            <div className="h-fit bg-primary flex flex-col items-start text-wrap justify-center gap-8 pt-8">
            <h1 className="text-xl font-semibold text-center text-white">
                {welcomeText || ""}
            </h1>
            <p className="text-secondary font-bold text-6xl sm:text-3xl lg:text-4xl text-center">
                {firstName || ""} {lastName || ""}
            </p>
            <p className="text-white text-6xl font-bold sm:text-xl lg:text-4xl text-center">
                {caption || ""}
            </p>
            
            <div className="h-fit text-wrap">
                <p className="text-white text-s font-medium text-opacity-60 w-3/4 lg:w-full">
                    {description || ""}
                </p>
            </div>
{/* 
            <div>
                <button className="border-2 border-tertiary px-10 py-4 text-lg text-tertiary rounded-md">Get Started</button>
            </div> */}
        </div>
    )
}

export default Intro