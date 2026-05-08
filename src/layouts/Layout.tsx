import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from '../../components/MainHeader';
import { MainFooter } from '../../components/MainFooter';

export default function Layout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}
