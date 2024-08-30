import { useEffect, useState } from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import axios from 'axios'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, SetPortfolioData, ShowLoading } from './redux/rootSlice'
import Loader from './components/Loader'
import Index from './pages/Admin/Index'

function App() {

  const {portfolioData , isLoading} = useSelector((state)=> state.root)
  // connect to the backend
  const dispatch = useDispatch()
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading())
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data))
      dispatch(HideLoading())
    } catch (error) {
      console.error(error)
      dispatch(HideLoading())
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
          {isLoading && <Loader /> }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Index />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
