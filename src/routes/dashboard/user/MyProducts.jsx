import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        fetch('http://localhost:5000/myProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Be sure to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const deleteProduct = await axiosSecure.delete(`/products/${_id}`);
                    if (deleteProduct.data.deletedCount > 0) {
                        const deleteMyProduct = await axiosSecure.delete(`/myProducts/${_id}`);
                        if (deleteMyProduct.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                            const updatedProducts = products.filter(product => product._id !== _id);
                            setProducts(updatedProducts)
                        } } 
                }catch (error) {
                    console.log(error);
                }
            }
        });
    }
    

    return (
        <div className='lg:m-5 md:m-3 lg:mt-6 md:mt-6 m-[-20px]'>
            <table className="table">
                <thead>
                    <tr className="lg:text-lg md:text-lg">
                        <th>Product Name</th>
                        <th>Vote Numbers</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(item => (
                        <tr key={item._id} className="hover">
                            <td>{item.name}</td>
                            <td>0</td>
                            <td>Pending</td>
                            <td>
                                <Link to={`/dashboard/updateProduct/${item._id}`} className="btn btn-accent">Update</Link>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-neutral ml-2 mt-1">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Helmet>
                <title>User | My Products</title>
            </Helmet>
        </div>
    );
};

export default MyProducts;