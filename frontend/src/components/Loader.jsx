import React from 'react'

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center fixed inset-0 bg-primary'>
            <div className='text-6xl flex gap-10 font-semibold'>
                <h1 className='text-secondary p'>P</h1>
                <h1 className='text-white r'>R</h1>
                <h1 className='text-tertiary b'>B</h1>
            </div>
        </div>
    )
}

export default Loader