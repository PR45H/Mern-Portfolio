import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet to render child routes
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Loader from './components/Loader';
import Home from './pages/Home/Home';
import Index from './pages/Admin/Index';
import { createActions } from './pages/Admin/AdminIntro';
import { createBrowserRouter } from 'react-router-dom';

// Define the routes using createBrowserRouter
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use App as the parent layout component
    children: [
      { path: '/', element: <Home /> },
      { path: '/admin', element: <Index />, action: createActions }, // Add action here
    ],
  },
]);

function App() {
  const { portfolioData, isLoading } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      console.error(error);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <div>
      {isLoading && <Loader />}
      {/* The Outlet component renders the matched child route's component */}
      <Outlet />
    </div>
  );
}

export default App;
