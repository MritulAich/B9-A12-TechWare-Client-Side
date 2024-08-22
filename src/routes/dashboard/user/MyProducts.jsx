import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    // const products = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (user?.email) {
                try {
                    const response = await axios.get(`http://localhost:5000/user/products?email=${user.email}`);
                    setProducts(response.data);
                } catch (error) {
                    console.error("Failed to fetch products:", error);
                }
            }
        };

        fetchProducts();
    }, [user?.email]);


    return (
        <div className='lg:m-5 md:m-3 mt-6'>
            <table className="table">
                <thead>
                    <tr className="lg:text-lg md:text-lg">
                        <th>Product Name</th>
                        <th>Vote Numbers</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product._id} className="hover">
                            <td>{product.name}</td>
                            <td>{product.upvote_count}</td>
                            <td>Pending</td>
                            <td>
                                {/* Add actions like Update or Delete here */}
                                {/* <button onClick={() => handleUpdate(product._id)} className="btn btn-accent">Update</button> */}
                                {/* <button onClick={() => handleDelete(product._id)} className="btn btn-neutral">Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;