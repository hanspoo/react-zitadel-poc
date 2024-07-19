import { useAuth } from 'react-oidc-context';
import { PleaseLogin } from '../PleaseLogin';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import EditProduct from './products/EditProduct';
import ProductList from './products/ProductList';

export function ProductsRoutes() {
  const auth = useAuth();
  if (!auth.isAuthenticated) return <PleaseLogin />;
  return (
    <Routes>
      <Route path="/*" element={<ProductList />}></Route>
      <Route path="/add" element={<AddProduct />}></Route>
      <Route path="/edit/:id" element={<EditProduct />}></Route>
    </Routes>
  );
}
