import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <h1>Conteudo</h1>
    </>
  );
}
