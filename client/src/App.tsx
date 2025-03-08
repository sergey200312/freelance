
import './App.css'
import './index.css'
import { Toaster } from './components/ui/sonner'
import { LoginPage } from './components/pages/LoginPage/LoginPage'
import { RegisterPage } from './components/pages/RegisterPage/RegisterPage'
import { MainPage } from './components/pages/MainPage/MainPage'

function App() {

  return (
    <>
      <MainPage />
      <Toaster />
    </>
  )
}

export default App
