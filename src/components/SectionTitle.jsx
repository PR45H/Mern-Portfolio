import React from 'react'


const SectionTitle = ({title}) => {
    return (
        <div className='flex items-center gap-10 mt-20'>
            <h1 className='text-white font-medium text-3xl'>{title}</h1>
            <div className='w-1/4 h-0.5 opacity-40 bg-tertiary'></div>

        </div>
    )
}

export default SectionTitle