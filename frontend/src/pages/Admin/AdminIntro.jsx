import React, {useRef} from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'

const AdminIntro = () => {

    return (
      <div className='flex flex-col gap-5 sm:gap-10'>
        <Form method='post' action='/admin' >
          <FormControl >
            <FormLabel>Welcome Text</FormLabel>
            <Input type="text" placeholder='Hey, I am' name='welcomeText'/>
          </FormControl>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type='text' placeholder='Jon' name='firstName' />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' placeholder='Doe' name='lastName' />
          </FormControl>
          <FormControl>
            <FormLabel>Caption</FormLabel>
            <Input type='text' placeholder='I build things for web...' name='caption' />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder='A short description of your journey and skills' name='description'/>
          </FormControl>
          <Button colorScheme='teal' type='submit' className='sm:mt-10 sm:w-full w-24 mt-10  '>Save</Button>
        </Form>
      </div>
    )
}
export const createActions = async ({ request }) => {
  try {
    const data = await request.formData()
    const submission = {
      welcomeText: data.get('welcomeText'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      caption: data.get('caption'),
      description: data.get('description')

    }
    console.log(submission);
    
    
  } catch (error) {
    console.log(error)
  }

  return redirect('/admin')
};

export default AdminIntro