import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

const Contact = () => {

    const { portfolioData } = useSelector((state) => state.root)
    const { contact } = portfolioData
    // contact is an array of objects
    const contactData = contact[0]
    
    return (
        <div>
            <SectionTitle title="Say Hello" />

            <div className="flex sm:flex-col items-center justify-evenly py-10">

                <div className="flex flex-col gap-1 text-[#00CCCC] text-xl">
                    <h1> {'{'} </h1>
                    {/* to access user object. */}
                    {Object.keys(contactData).filter(ele => ele != "_id").map((key , i) => (
                        <h1 key={i} className='ml-5'>
                            <span>{ key} : </span>
                            <span>"{contactData[key]}"</span>
                        </h1>
                    ))}
                    <h1> {'}'} </h1>
                </div>

                <div className="h-[400px]">
                    <lottie-player src="https://lottie.host/8e82d563-ea5e-41c4-891d-e9e830a78e5e/TtNwrD4WNh.json" background="##ffffff" speed="1" direction="1" mode="normal"></lottie-player>
                </div>

            </div>
        </div>
    )
}

export default Contact