import React from 'react'
import { Button, Form, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'

const AdminAbout = () => {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    const { about } = portfolioData

    const onFinish = async (values) => {

        try {
            dispatch(ShowLoading())
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolio/update-about`, {
                ...values,
                _id: about[0]._id
            })
            dispatch(HideLoading())

            if (response.data.message === 'About updated successfully') {
                message.success(response.data.message)
            } else {
                message.error(response.data.message);
            }
        
            
        } catch (error) {
            console.log(error)
            dispatch(HideLoading())

        }
    }
    
    return (
        <div className='p-5'>
            <Form layout='vertical' onFinish={onFinish} initialValues={about[0]} >
                <Form.Item name="lottieUrl" label="Gif / Image URL">
                    <input type="text" placeholder='Image_url / Lottie_url'/>
                </Form.Item>
                <Form.Item name="description1" label="Description" rules={[{required:true, message:"Your Input is necessary"}]} >
                    <textarea type="text" placeholder='Description 1' />
                </Form.Item>
                <Form.Item name="description2" label="Description" rules={[{required:true, message:"Your input is necessary"}]}>
                    <textarea type="text" placeholder='Description 2' />
                </Form.Item>
                <Form.Item name="description3" label="Description">
                    <textarea type="text" placeholder='Optional Description' />
                </Form.Item>
                <Form.Item label="Description" name="description4">
                    <textarea type="text" placeholder='Optional Description' />
                </Form.Item>
                <div className='text-center'>
                    <button type='submit' className='font-medium bg-tertiary text-white px-5 py-3 rounded-lg outline hover:outline-1 hover:text-tertiary hover:outline-tertiary hover:bg-white text-lg'>Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminAbout