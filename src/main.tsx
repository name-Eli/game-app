import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './services/reactQueryClient'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
