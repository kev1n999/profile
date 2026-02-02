import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App'
import NavBar from './components/navbar'
import About from './components/about'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
