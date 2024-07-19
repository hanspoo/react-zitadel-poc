import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

const EditProduct = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`/api/admin/products/${id}`);
      setName(response.data.name);
      setPrice(response.data.price);
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    e.preventDefault();
    await axios
      .patch(`/api/admin/products/${id}`, {
        name: name,
        price: parseInt(price),
      })
      .then(() => {
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
      <h1 className="text-2xl mb-2 font-extralight">Edit Product</h1>
      <form onSubmit={updateProduct}>
        <div className="mb-6">
          <label htmlFor="email" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
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
            className="input input-bordered"
            required
          />
        </div>
        <Link to="/admin/products">
          <button type="button" className="btn mr-1">
            Cancel
          </button>
        </Link>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
