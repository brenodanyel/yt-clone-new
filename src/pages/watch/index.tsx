import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function WatchWrapper() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
