import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReportedContents = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reports')
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
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/reports/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The product has been deleted.",
                                icon: "success"
                            })
                            const remaining = products.filter(cof => cof._id !== _id);
                            setProducts(remaining)
                        }
                    })
            }
        });
    }
    
    return (
        <div className='lg:m-5 md:m-3 mt-6 ml-[-20px] mr-[-20px]'>
            <table className="table">
                <thead>
                    <tr className="lg:text-lg md:text-lg">
                        <th>Product Name</th>
                        <th>Option</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product._id} className="hover">
                            <td>{product.name}</td>
                            <td>
                                <Link to={`/productDetails/${product._id}`} className="hover:underline">Details</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-neutral">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Helmet>
                <title>Moderator | Reported Contents</title>
            </Helmet>
        </div>
    );
};

export default ReportedContents;