import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyProducts = () => {
    const [product, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    
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
                axiosSecure.delete(`/payments/${_id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                })
            }
        });
    }

    return (
        <div className='lg:m-5 md:m-3 mt-6'>
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
                    {product.map(item => (
                        <tr key={item._id} className="hover">
                            <td>{item.name}</td>
                            <td>{item.upvote_count}</td>
                            <td>Pending</td>
                            <td>
                                {/* <button onClick={() => handleUpdate(item._id)} className="btn btn-accent">Update</button> */}
                                <button onClick={() => handleDelete(item._id)} className="btn btn-neutral">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;