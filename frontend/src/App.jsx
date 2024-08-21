import { useEffect, useState } from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import axios from 'axios'
import './App.css'

function App() {
  const getPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      console.log(response.data)
    } catch (error) {
      console.error(error.response)
      
    }
  }

  useEffect(() => {
    getPortfolioData()
  },[])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
