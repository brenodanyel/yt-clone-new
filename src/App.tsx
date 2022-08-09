import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomeWrapper } from './pages/home';
import { Home } from './pages/home/home';

export function App() {
  return (
    <div className="min-h-screen bg-color-1 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeWrapper />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
