import React from 'react'
import { Tabs, Tooltip } from "antd";
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
import Header from '../../components/Header';

const Index = () => {
    const items = [
            {
            key: '1',
            label: 'Admin Intro',
            children: <AdminIntro />,
            },
            {
            key: '2',
            label: 'Admin About',
            children: <AdminAbout />,
            }]
    return (
        <div >
            <Header />
            <Tabs defaultActiveKey="1" items={items} className='mt-5' centered />
            
        </div>
        
    )
}

export default Index