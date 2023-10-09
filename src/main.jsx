import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Router from './Router/Router'
import CategoryDataContext from './Utils/EventDataContext/CategoryDataContext'
import AuthProvider from './Utils/AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <AuthProvider>
        <CategoryDataContext>
          <RouterProvider router={Router}>
            <MainLayout></MainLayout>
          </RouterProvider>
        </CategoryDataContext>
        <Toaster />
      </AuthProvider>
   

  </React.StrictMode>,
)
