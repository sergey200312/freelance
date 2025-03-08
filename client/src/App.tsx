
import './App.css'
import './index.css'
import { AppRoutes } from './router/AppRoutes'
import { BrowserRouter, Router } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
