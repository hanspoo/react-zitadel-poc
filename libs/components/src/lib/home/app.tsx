// src/App.jsx
import React from 'react';
import { useAuth } from 'react-oidc-context';
import { Navbar } from './navbar';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Authenticated } from './Authenticated';
import { Unauthenticated } from './Unauthenticated';
import { FormArticle } from '../form-article/form-article';
import { Footer } from '../public/footer';
import { ProductsRoutes } from '../admin/ProductsRoutes';

export function App() {
  const auth = useAuth();

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[1280px] m-auto justify-between">
      <div>
        <Navbar loginSection={auth.isAuthenticated} />
        <div className="m-4 min-h-[640px] ">
          <Routes>
            <Route
              path="/"
              element={
                auth.isAuthenticated ? <Authenticated /> : <Unauthenticated />
              }
            ></Route>
            <Route path="/article" element={<FormArticle />}></Route>
            <Route path="/admin/products/*" element={<ProductsRoutes />} />
            <Route path="/admin" element={<Authenticated />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
