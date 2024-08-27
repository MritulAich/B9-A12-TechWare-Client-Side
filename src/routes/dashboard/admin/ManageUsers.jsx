import useAdmin from '../../../hooks/useAdmin';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

const ManageUsers = () => {
    const [isAdmin, isLoading] = useAdmin();

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }
    // if (!isAdmin) {
    //     return <p>You do not have access to this page.</p>;
    // }

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
                        title: `${member.displayName} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleMakeModerator = member => {
        axiosSecure.patch(`/members/moderator/${member._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${member.displayName} is an Moderator now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    

    return (
        <div>
            <h1 className='text-center text-2xl font-medium underline mb-8'>Manage members</h1>
            
            <div className="overflow-x-auto lg:ml-4 md:ml-2 ml-[-20px]">
                <table className="table table-xs lg:table-lg md:table-md">
                    <thead>
                        <tr className='lg:text-lg md:text-lg'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((member) => <tr key={member._id}>
                                <td>{member.displayName}</td>
                                <td>{member.email}</td>
                                <td className='hover:font-semibold'>
                                    {member.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(member)}
                                        className="hover:btn-warning text-red-500">Make Admin
                                    </button>}
                                </td>
                                <td className='hover:font-semibold'>
                                    {member.role === 'moderator' ? 'Moderator' : <button onClick={() => handleMakeModerator(member)}
                                        className="hover:btn-info text-orange-400">Make Moderator
                                    </button>}
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