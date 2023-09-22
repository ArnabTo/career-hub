import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './routes/root';
import Statistics from './components/statistic/Statistics';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import Blogs from './components/blogs/Blogs';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/stat",
        element: <Statistics></Statistics>
      },
      {
        path:"/appliedjobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
