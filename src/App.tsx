import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from "./layouts/MainLayout";

import './App.css'

function App() {
  return (
    <Routes>
      {/* Wrap routes inside MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<h1 className="p-6 text-red-600">404 - Page not found</h1>} />
    </Routes>
  );
}


export default App;