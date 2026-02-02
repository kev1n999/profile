import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import NavBar from './components/navbar';
import Skills from './components/skills';
import Contacts from './components/contacts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<App />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
