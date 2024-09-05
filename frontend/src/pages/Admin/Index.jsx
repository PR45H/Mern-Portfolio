import React from 'react'
import AdminIntro from './AdminIntro'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd'
import AdminAbout from './AdminAbout'

const Index = () => {
    const { portfolioData } = useSelector((state) => state.root)
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
            },
            {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
            },
    ];
    return (
        <div>
            <Header />
            {portfolioData && <Tabs defaultActiveKey="1" items={items} className='p-5' />}
            
        </div>
    )
}

export default Index