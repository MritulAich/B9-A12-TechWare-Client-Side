import useAdmin from '../../../hooks/useAdmin';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

const ManageUsers = () => {
    const [isAdmin, isLoading] = useAdmin();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (!isAdmin) {
        return <p>You do not have access to this page.</p>;
    }

    const axiosSecure = useAxiosSecure();

    const { data: members = [], refetch } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await axiosSecure.get('/members');
            return res.data;
        }
    })

    const handleMakeAdmin = member => {
        axiosSecure.patch(`/members/admin/${member._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "the user is an Admin now",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteMember = member => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/members/${member._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Member has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-medium underline mb-8'>Manage members</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((member, index) => <tr key={member._id}>
                                <th>{index + 1}</th>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>
                                    {member.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(member)}
                                        className="btn btn-ghost btn-lg text-red-600">
                                    </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteMember(member)}
                                        className="btn btn-ghost btn-lg text-red-600">
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Helmet>
                <title>Admin | Manage Users</title>
            </Helmet>
        </div>
    );
};

export default ManageUsers;