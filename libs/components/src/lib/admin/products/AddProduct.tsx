import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const axios = useAxios();
  const [name, setName] = useState('');

  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const saveProduct = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post('/api/admin/products', {
        name: name,
        price: parseInt(price),
      })
      .then((response) => {
        navigate('/admin/products');
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) return <p>Sending information...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-lg mx-auto my-10 p-2 rounded-md sm:p-8 sm:shadow sm:border">
      <h1 className="text-2xl mb-2 font-extralight">Add Product</h1>
      <form onSubmit={saveProduct}>
        <div>
          <label htmlFor="email" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="price" className="label">
            Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <Link to="/admin/products">
          <button type="button" className="btn mr-1">
            Cancel
          </button>
        </Link>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
