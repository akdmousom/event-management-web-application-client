import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Router from './Router/Router'
import CategoryDataContext from './Utils/EventDataContext/CategoryDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryDataContext>
      <RouterProvider router={Router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </CategoryDataContext>
  </React.StrictMode>,
)
