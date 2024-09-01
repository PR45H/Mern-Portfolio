import React from 'react'
import AdminIntro from './AdminIntro'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd'

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
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
            },
            {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
            },
    ];
    return (
        <div className=''>
            <Header />
            {portfolioData && <Tabs defaultActiveKey="1" items={items} />}
            
        </div>
    )
}

export default Index