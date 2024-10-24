import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import DiscordTime from './Pages/DiscordTime.tsx';
import BaseLayout from './Layouts/BaseLayout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/discord-timestamp",
    element: <BaseLayout><DiscordTime /></BaseLayout>,
    errorElement: <ErrorPage />,
  }

]);

//Comment to test commit deployment stuff
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
