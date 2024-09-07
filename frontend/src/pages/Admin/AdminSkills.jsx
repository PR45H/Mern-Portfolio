import { Form, message } from 'antd'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const AdminSkills = () => {
    const { portfolioData } = useSelector((state) => state.root)
    
    const onFinish = async(values) => {
        
        try {
            const skillsArray = values.skills.split(',').map(skill => skill.trim());
            const response = await axios.post('/api/portfolio/update-skills', {
                ...values,
                skills: skillsArray,
                _id: portfolioData.skills[0]._id
            })
            // console.log(response);
            if (response.data.message) {
                message.success(response.data.message)
            } else {
                message.error(response.data.message)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <Form layout='vertical' initialValues={portfolioData.skills[0]} onFinish={onFinish} >
                <Form.Item name="skills" label="Skills" >
                    <input type="text" />
                </Form.Item>
                <div className='text-center'>
                    <button type='submit' className='font-medium bg-tertiary text-white px-5 py-3 rounded-lg outline hover:outline-1 hover:text-tertiary hover:outline-tertiary hover:bg-white text-lg'>Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminSkills