import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AdminIntro from './AdminIntro'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'

const index = () => {
    const {portfolioData} = useSelector((state)=> state.root)
    return (
        <div>
            <Header />
            {portfolioData && <Tabs className='mt-5 p-5 sm:' colorScheme='teal' >
                <TabList >
                    <Tab>Admin Intro</Tab>
                    <Tab>Admin About</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <AdminIntro />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>}
            
        </div>
    )
}

export default index