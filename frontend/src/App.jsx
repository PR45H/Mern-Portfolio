import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Import Outlet to render child routes
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Loader from './components/Loader';
import Home from './pages/Home/Home';
import Index from './pages/Admin/Index';


function App() {
  const { portfolioData, isLoading } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('https://mern-portfolio-m7w8.onrender.com/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      console.log(error);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <div className='selection:bg-selection'>
        <BrowserRouter>
          {isLoading && <Loader /> }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Index />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
