
import './App.css'
import './index.css'
import { Toaster } from './components/ui/sonner'
import { LoginPage } from './components/pages/LoginPage/LoginPage'
import { RegisterPage } from './components/pages/RegisterPage/RegisterPage'

function App() {

  return (
    <>
      <LoginPage />
      <Toaster />
    </>
  )
}

export default App
