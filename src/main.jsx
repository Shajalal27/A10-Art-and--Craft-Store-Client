import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import AuthContextProvider from './ContextProvider/AuthContextProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
     </AuthContextProvider>
  </React.StrictMode>,
)
