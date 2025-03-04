
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { createStore } from './store/createStore.ts'

createRoot(document.getElementById('root')!).render(
    <Provider store={createStore}>
      <App />
    </Provider>
)
