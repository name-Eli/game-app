import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './learning-proj/components/App'
//import App from './expense-tracker-proj/components/App/App'
//import App from './fetching-data-proj/components/App'
import App from './game-hub-proj/components/App'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
