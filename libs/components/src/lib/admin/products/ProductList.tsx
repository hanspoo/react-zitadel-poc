import { Link } from 'react-router-dom';
import useSWR, { mutate } from 'swr';
import { useAxios } from '../../hooks/useAxios';
import { useState } from 'react';

const ProductList = () => {
  const [product, setProduct] = useState();
  const axios = useAxios();
  const fetcher = async () => {
    const response = await axios.get('/api/admin/products');
    return response.data;
  };

  const { data, error, isLoading } = useSWR('products', fetcher);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  if (!data) {
    return <h2>Error no hay datos</h2>;
  }

  const deleteProduct = async (productId: any) => {
    await axios.delete(`/api/admin/products/${productId}`);
    mutate('products');
  };

  return (
    <div className="flex flex-col my-10">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Borrar producto</h3>
          <p className="py-4">The product will be eliminated permanently</p>
          <form method="dialog" className="modal-backdrop">
            <div className="modal-action flex">
              <button className="btn">Close</button>
              <button
                onClick={() => deleteProduct(product?.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <div className="w-full">
        <Link to="/admin/products/add" className="ml-4 sm:ml-0">
          <button type="button" className="btn btn-sm">
            New Product
          </button>
        </Link>
        <div className="mt-5 overflow-x-auto relative shadow sm:rounded-lg border">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length !== 0 ? (
                data.map((product: any, index: any) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <Link to={`/admin/products/edit/${product.id}`}>
                        <button className="btn btn-xs mr-1" type="button">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setProduct(product);
                          document.getElementById('my_modal_1').showModal();
                        }}
                        type="button"
                        className="btn btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center font-light">
                    Empty list
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
