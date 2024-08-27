import { useEffect, useState } from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import axios from 'axios'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { SetPortfolioData } from './redux/rootSlice'

function App() {

  const {portfolioData , isLoading} = useSelector((state)=> state.root)
  // connect to the backend
  const dispatch = useDispatch()
  const getPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData()
      
    }
  },[portfolioData])

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
