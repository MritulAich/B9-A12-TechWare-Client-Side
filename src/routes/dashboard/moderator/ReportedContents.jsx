import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ReportedContents = () => {
    const [reports, setReports] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        fetch('http://localhost:5000/reports')
            .then(res => res.json())
            .then(data => setReports(data));
    }, []);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Be sure to remove this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // const deleteProduct = await axiosSecure.delete(`/products/${_id}`);
                    // if (deleteProduct.data.deletedCount > 0) {
                        const deleteReport = await axiosSecure.delete(`/reports/${_id}`);
                        if (deleteReport.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This product has been deleted.",
                                icon: "success"
                            });
                            const updatedProducts = products.filter(product => product._id !== _id);
                            setProducts(updatedProducts)
                        } } 
                    // }
                        catch (error) {
                    console.log(error);
                }
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
                    {reports?.map(product => (
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