import { Link } from 'react-router-dom';
import useSWR, { mutate } from 'swr';
import { useAxios } from '../../hooks/useAxios';

const ProductList = () => {
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
      <div className="w-full">
        <Link to="/admin/products/add" className="ml-4 sm:ml-0">
          <button type="button" className="btn btn-sm">
            Add New Product
          </button>
        </Link>
        <div className="mt-5 overflow-x-auto relative shadow sm:rounded-lg border">
          <table className="table table-sm bg-primary">
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
                        type="button"
                        className="btn btn-xs"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td colSpan={4} className="py-4 px-6 text-center">
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
