import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Redirect from './pages/Redirect/Redirect'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Redirect/>
  }
], {
  basename: '/personal-website'
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
