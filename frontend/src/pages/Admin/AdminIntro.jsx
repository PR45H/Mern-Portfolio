import React from 'react'
import {  Form } from 'antd'
import FormItem from 'antd/es/form/FormItem'

const AdminIntro = () => {
    return (
      <div className='p-10'>
        <Form >
          <FormItem name='welcomeText'>
            <input type="text" placeholder='Intro' />
          </FormItem>
          <FormItem name='firstName'>
            <input type="text" placeholder='First Name' />
          </FormItem>
          <FormItem name='lastName'>
            <input type="text" placeholder='Last Name' />
          </FormItem>
          <FormItem name='caption'>
            <input type="text" placeholder='Caption' />
          </FormItem>
          <FormItem name='description'>
            <textarea placeholder='Description'></textarea>
          </FormItem>
        </Form>
        
      </div>
    )
}

export default AdminIntro