import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div className='min-h-screen flex flex-col w-full max-w-4xl mx-auto'>
        <Header />
        <div className='container flex-1 max-w-2xl mx-auto'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  ),
});
