import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function CWrapper() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
