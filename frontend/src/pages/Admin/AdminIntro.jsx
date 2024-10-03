import React from 'react'
import { Form, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'


const AdminIntro = () => {
  const { portfolioData } = useSelector((state) => state.root)
  const dispatch = useDispatch()
  // send the updated data to the backend
  const onFinish = async (values) => {
    console.log(values)
    try {
      dispatch(ShowLoading())
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolio/update-intro`, {
        // send the whole object with the updated values
        ...values,
        // send the id of the object to be updated
        _id: portfolioData.intro[0]._id
      })
      dispatch(HideLoading())
      console.log(response)
      if (response.data.message === 'Intro updated successfully') {
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
    <div className='p-5' >
      <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.intro[0]} >
        <Form.Item name='welcomeText' label="Welcome Text">
          <input type="text" placeholder='Hey...!'  />
        </Form.Item>
        <Form.Item name='firstName' label="First Name">
          <input type="text" placeholder='Jon'  />
        </Form.Item>
        <Form.Item name='lastName' label="Last Name">
          <input type="text" placeholder='Doe'  />
        </Form.Item>
        <Form.Item name='caption' label="Caption">
          <input type="text" placeholder='I build things for the web'  />
        </Form.Item>
        <Form.Item name='description' label="Description">
          <textarea type="text" placeholder='Give a brief about your journey and skills' className='align-' />
        </Form.Item>
        <div className='text-center'>
          <button type='submit' className='font-medium bg-tertiary text-white px-5 py-3 rounded-lg outline hover:outline-1 hover:text-tertiary hover:outline-tertiary hover:bg-white text-lg'>Submit</button>
        </div>
      </Form>
    </div>
  )
}
export default AdminIntro