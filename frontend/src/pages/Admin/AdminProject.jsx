import { Form } from 'antd'
import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'

const AdminProject = () => {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    const { projects } = portfolioData
    console.log(projects)
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 sm:flex sm:flex-col lg:flex lg:flex-col md:flex md:flex-col'>
                {projects.map((project, index) => (
                    <div key={index} className=' shadow-md border flex flex-col gap-2  p-4'>
                        <h1 className='text-secondary text-xl font-semibold'>{project.title}</h1>
                        <h1 className='text-teal-900'>{project.description}</h1>
                        {<h1>{project.techStack.join(", ")}</h1>}
                        <a href={project.github} target='_blank' className='w-fit'>{project.github}</a>
                        <a href={project.deployed} target='_blank' className='w-fit'>{project.deployed}</a>
                        <div className='flex gap-4 mt-2'>
                            <button className='bg-teal-700 px-4 py-2 rounded-2xl text-white '>Edit</button>
                            <button className='bg-red-700 px-4 py-2 rounded-2xl text-white'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-10'>
                <i className="ri-add-circle-line text-5xl text-primary opacity-60 hover:text-primary hover:opacity-30 cursor-pointer" ></i>
            </div>
        </div>
    )
}

export default AdminProject