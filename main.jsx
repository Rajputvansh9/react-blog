import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BlogProvider } from './context/BlogContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BlogProvider>
    <App />
  </BlogProvider>
)