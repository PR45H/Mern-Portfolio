import { Form } from 'antd'
import React from 'react'

const AdminProject = () => {
    return (
        <div>
            <Form layout='vertical'>
                <Form.Item  name="title" label="Title" >
                    <input type="text" />
                </Form.Item>
                <Form.Item name="description" label="Description" >
                    <textarea type="text" />
                </Form.Item>
                <Form.Item name="techStack" label="Tech Stack" >
                    <input type="text" />
                </Form.Item>
                <Form.Item name="github" label="Github" >
                    <input type="text" />
                </Form.Item>
                <Form.Item name="deployed" label="Deployed" >
                    <input type="text" />
                </Form.Item>
                <Form.Item name="image" label="Image" >
                    <input type="text" />
                </Form.Item>
                <div className='text-center'>
                    <button type='submit' className='font-medium bg-tertiary text-white px-5 py-3 rounded-lg outline hover:outline-1 hover:text-tertiary hover:outline-tertiary hover:bg-white text-lg'>Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminProject