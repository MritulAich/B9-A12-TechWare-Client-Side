import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductReviewQueue = () => {
    const [products, setProducts] = useState([]);
    const [acceptedProducts, setAcceptedProducts] = useState({});
    const [rejectedProducts, setRejectedProducts] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleFeatured = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Marked this as featured",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleAccept = (id) => {
        setAcceptedProducts(prevState => ({
            ...prevState,
            [id]: true
        }));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Accepted",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleReject = (id) => {
        setRejectedProducts(prevState => ({
            ...prevState,
            [id]: true
        }));
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Product Rejected",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className='lg:m-5 md:m-3 mt-6'>
            <table className="table">
                <thead>
                    <tr className="text-lg">
                        <th>Name</th>
                        <th>View Details</th>
                        <th>Actions</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product._id} className="font-medium">
                            <td>{product.name}</td>
                            <td>
                                <Link to={`/productDetails/${product._id}`} className="hover:underline">Details</Link>
                            </td>
                            <td>
                                <button onClick={handleFeatured} className="btn btn-ghost">Make Featured</button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleAccept(product._id)}
                                    className={`btn ${acceptedProducts[product._id] ? 'btn-success' : 'btn-outline btn-accent'}`}
                                    disabled={acceptedProducts[product._id] || rejectedProducts[product._id]}
                                >
                                    {acceptedProducts[product._id] ? 'Accepted' : 'Accept'}
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleReject(product._id)}
                                    className={`btn ${rejectedProducts[product._id] ? 'btn-error' : 'btn-outline btn-warning'}`}
                                    disabled={acceptedProducts[product._id] || rejectedProducts[product._id]}
                                >
                                    {rejectedProducts[product._id] ? 'Rejected' : 'Reject'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductReviewQueue;
