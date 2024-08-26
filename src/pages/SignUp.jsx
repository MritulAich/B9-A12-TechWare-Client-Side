import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth"; // Import updateProfile

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((res) => {
                const user = res.user;
                return updateProfile(user, {
                    displayName: data.displayName,
                    photoURL: data.photoURL,
                }).then(() => {
                    const userInfo = {
                        displayName: data.displayName,
                        email: data.email,
                        photoURL: data.photoURL,
                        password: data.password
                    };
                    return axiosPublic.post('/members', userInfo);
                }).then(res => {
                    if (res.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Member created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    }
                })
            })
            .catch((error) => {
                console.error(error);
            });

        if (data.password.length < 6) {
            toast('Password must contain minimum 6 characters');
        } else {
            toast('You have registered successfully');
        }
    };

    return (
        <div className="flex justify-center  bg-[#fbf3ec]">
            <div className="flex flex-col justify-center items-center my-24">
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                    <h2 className="mb-3 text-2xl font-semibold text-center">User Registration</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("displayName", { required: true })} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="type url" {...register("photoURL", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })}
                                placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        </div>
                        <button className="w-full px-8 py-3 mb-4 font-semibold rounded-md bg-blue-600 text-gray-50">Sign up</button>
                    </form>
                    <h2>Have an account? Go to <Link to='/login' className="font-bold">Login</Link></h2>
                </div>
                <ToastContainer />
                <Helmet>
                    <title>Registration</title>
                </Helmet>
            </div>
        </div>
    );
};

export default SignUp;
