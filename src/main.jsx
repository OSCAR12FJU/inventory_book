import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SectionBooks from './pages/sections/SectionBooks.jsx'
import { FormBooks } from './forms/FormBooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<SectionBooks />} /> 
        <Route path="añadir-libro" element={<FormBooks />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
