import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function HomeWrapper() {
  return (
    <>
      <Header />
      <div className="p-2">
        <Outlet />
      </div>
    </>
  );
}
