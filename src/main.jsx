import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Router from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={Router}>
        <MainLayout></MainLayout>
    </RouterProvider>

  </React.StrictMode>,
)
