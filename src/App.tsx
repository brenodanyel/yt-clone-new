import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomeWrapper } from './pages/home';
import { Home } from './pages/home/home';
import { Results } from './pages/home/results';
import { CWrapper } from './pages/c';
import { Channel } from './pages/c/channel';
import { WatchWrapper } from './pages/watch';
import { Watch } from './pages/watch/watch';

export function App() {
  return (
    <div className="min-h-screen bg-color-1 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeWrapper />}>
            <Route path="" element={<Home />} />
            <Route path="results" element={<Results />} />
          </Route>
          <Route path="c" element={<CWrapper />}>
            <Route path=":channelId" element={<Channel />} />
          </Route>
          <Route path="watch" element={<WatchWrapper />}>
            <Route path="" element={<Watch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
