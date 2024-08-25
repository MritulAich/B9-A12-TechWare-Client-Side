import {Helmet} from "react-helmet";
import Banner from "../pages/Banner";
import Featured from "../pages/Featured";
import TrendingProducts from "../pages/TrendingProducts";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechWare | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;






























// import {
//     createBrowserRouter,
// } from "react-router-dom" ;
// import Root from "./layout/Root";
// import Error from "../shared/Error";
// import Home from "./Home";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";
// import Products from "../pages/product/Products";
// import ProductDetails from "../pages/product/ProductDetails";
// import Dashboard from "./dashboard/Dashboard";
// import MyProfile from "./dashboard/user/MyProfile";
// import AddProduct from "./dashboard/user/AddProduct";
// import MyProducts from "./dashboard/user/MyProducts";
// import PrivateRoute from "./PrivateRoute";
// import Payment from "./dashboard/user/Payment";
// import ProductReviewQueue from "./dashboard/moderator/ProductReviewQueue";
// import ReportedContents from "./dashboard/moderator/ReportedContents";
// import ManageUsers from "./dashboard/admin/ManageUsers";

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root></Root>,
//         errorElement: <Error></Error>,
//         children:[
//             {
//                 path: '/',
//                 element: <Home></Home>
//             },
//             {
//                 path: 'login',
//                 element: <Login></Login>
//             },
//             {
//                 path: 'signUp',
//                 element:<SignUp></SignUp>
//             },
//             {
//                 path: 'products',
//                 element: <Products></Products>
//             },
//             {
//                 path: 'productDetails/:id',
//                 element: <ProductDetails></ProductDetails>,
//                 loader: ({params})=> fetch(http://localhost:5000/products/${params.id})
//             }
//         ]
//     },
//     {
//         path: 'dashboard',
//         element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
//         children:[

//             //user routes
//             {
//                 path: 'myProfile',
//                 element:<MyProfile></MyProfile>
//             },
//             {
//                 path: 'payment',
//                 element: <Payment></Payment>
//             },
//             {
//                 path:'addProduct',
//                 element:<AddProduct></AddProduct>
//             },
//             {
//                 path:'myProducts',
//                 element:<MyProducts></MyProducts>
//             },

//             //moderator routes
//             {
//                 path: 'productReview',
//                 element: <ProductReviewQueue></ProductReviewQueue>
//             },
//             {
//                 path: 'reportedContents',
//                 element:<ReportedContents></ReportedContents>
//             },

//             //admin
//             {
//                 path: 'manageUsers',
//                 element:<ManageUsers></ManageUsers>
//             }

//         ]
//     }
// ]);  import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import app from "../../firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";
// import useAxiosPublic from "../hooks/useAxiosPublic";

// export const AuthContext = createContext({});
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider;


// const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(null);
//     const axiosPublic = useAxiosPublic();

//     const createUser = (email, password)=>{
//        return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const signIn = (email, password)=>{
//         return signInWithEmailAndPassword(auth, email, password)
//     }
//     const signInWithGoogle =()=>{
//         return signInWithPopup(auth, provider)
//     }
//     const logOut =()=>{
//         return signOut(auth)
//     }

//     useEffect(()=>{
//         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
//             setUser(currentUser);
//             if(currentUser){
//                 const userInfo = {email: currentUser.email};
//                 axiosPublic.post('/jwt', userInfo)
//                 .then(res=>{
//                     if(res.data.token){
//                         localStorage.setItem('access-token', res.data.token)
//                     }
//                 })
//             }else{
//                 localStorage.removeItem('access-token')
//             }
//         });

//         return()=>{
//             unSubscribe()
//         }
//     },[axiosPublic])


    
//     const authInfo = {
//         user,
//         createUser,
//         signIn,
//         signInWithGoogle,
//         logOut
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;  import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { IoTriangle } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         const fetchProducts = async () => {
//             let url = 'http://localhost:5000/products';
//             if (searchQuery) {
//                 url = http://localhost:5000/search?q=${encodeURIComponent(searchQuery)};
//             }
//             const response = await fetch(url);
//             const data = await response.json();
//             setProducts(data);
//         };

//         fetchProducts();
//     }, [searchQuery]);

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     return (
//         <div className="flex">
//             <div className="mt-20">
//                 <label className="input input-bordered flex items-center w-[400px] gap-2 my-6 mx-auto">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                         className="h-4 w-4 opacity-70">
//                         <path
//                             fillRule="evenodd"
//                             d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                             clipRule="evenodd" />
//                     </svg>
//                     <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={handleSearch}
//                         placeholder="Search by tag..."
//                         className="w-full"
//                     />
//                 </label>

//                 <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
//                     {products.map(product => (
//                         <div key={product._id} className="card w-96 bg-base-100 shadow-xl p-8 space-y-4">
//                             <Link to={/productDetails/${product._id}}>
//                             <figure><img src={${product.image_url}} alt={product.name} className="rounded-xl w-24" /></figure>
//                             </Link>
//                             <Link to={/productDetails/${product._id}}><h2 className="text-2xl font-semibold">{product.name}</h2></Link>
//                             <p>Tags: <span className="font-semibold italic">{product.tags[0]}, {product.tags[1]}, {product.tags[2]}</span></p>
//                             <p>UpVote Count: {product.upvote_count}</p>
//                             <button className="btn btn-outline btn-info"><IoTriangle /> UpVote</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Helmet>
//                 <title>TechWare | Products</title>
//             </Helmet>
//         </div>
//     );
// };
// ///////////////////////////////////////////////////////////////////////////////////
// export default Products;
// import { Helmet } from "react-helmet";
// import { IoTriangle } from "react-icons/io5";
// import { MdOutlineReport } from "react-icons/md";
// import { useLoaderData } from "react-router-dom";
// import { Rating } from '@smastrom/react-rating';
// import '@smastrom/react-rating/style.css';
// import { useState } from "react";

// const ProductDetails = () => {

//     const product = useLoaderData();
//     const [rating, setRating] = useState(0);

//     return (
//         <div className="bg-base-200">
//             <div className="flex flex-col lg:flex-row justify-center gap-10 p-6">
//                 <div className="mt-20">
//                     <img className="rounded-xl w-60" src={product?.image_url} />
//                 </div>
//                 <div className="lg:mt-20">
//                     <h2 className="text-2xl font-semibold text-center mb-3">{product?.name}</h2>
//                     <p>Tags: <span className="font-semibold italic">{product?.tags[0]}, {product?.tags[1]}, {product?.tags[2]}</span></p>
//                     <p className="text-lg my-1">{product?.description}</p>
//                     <p>Up vote count: <span className="text-lg font-semibold text-red-500">{product?.upvote_count}</span></p>
//                     <p className="hover:underline my-1"><a href={product?.external_link}>Click to discover more.. </a></p>
//                     <div className="flex flex-row justify-evenly">
//                         <button className="btn btn-outline my-1"><IoTriangle />UpVote</button>
//                         <button className="btn btn-outline btn-error">Report<MdOutlineReport /></button>
//                     </div>
//                 </div>
//             </div>

//             <h3 className="text-2xl text-center border-b-2 border-b-gray-300 mx-auto md:w-4/12 my-4">What people say about it-</h3>
//             <div className="flex flex-col lg:flex-row md:flow-row ">
//                 <div className="card bg-amber-100 shadow-lg container flex flex-col w-full max-w-lg p-4 mb-10 mx-auto divide-y divide-gray-600 rounded-md dark:text-gray-800">
//                     <div className="flex justify-between p-4">
//                         <div className="flex space-x-4">
//                             <img src="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
//                             <h4 className="font-medium text-xl">{product?.reviews[0].user}</h4>
//                         </div>
//                         <div className="flex items-center space-x-2 dark:text-yellow-700">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
//                                 <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                             </svg>
//                             <span className="text-xl font-bold">{product?.reviews[0].rating}</span>
//                         </div>
//                     </div>
//                     <p>{product?.reviews[0].comment}</p>
//                 </div>

//                 <div className="card bg-amber-100 shadow-lg container flex flex-col w-full max-w-lg p-4 mb-10 mx-auto divide-y divide-gray-600 rounded-md dark:text-gray-800">
//                     <div className="flex justify-between p-4">
//                         <div className="flex space-x-4">
//                             <img src="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
//                             <h4 className="font-medium text-xl">{product?.reviews[1].user}</h4>
//                         </div>
//                         <div className="flex items-center space-x-2 dark:text-yellow-700">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
//                                 <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                             </svg>
//                             <span className="text-xl font-bold">{product?.reviews[1].rating}</span>
//                         </div>
//                     </div>
//                     <p>{product?.reviews[1].comment}</p>
//                 </div>
//             </div>


//             <div className="hero bg-base-200 pb-10">
//                 <div>
//                     <h1 className="text-2xl underline font-semibold mb-2">Post a review :-</h1>
//                     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                         <form className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name :</span>
//                                 </label>
//                                 <input type="name" name="name" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Image :</span>
//                                 </label>
//                                 <input type="file" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Description :</span>
//                                 </label>
//                                 <input type="text" name="description" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text"><Rating
//                                         style={{ maxWidth: 180 }}
//                                         value={rating}
//                                         onChange={setRating}
//                                         isRequired
//                                     /></span>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-primary">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             <Helmet>
//                 <title>Products Details</title>
//             </Helmet>
//         </div>
//     );
// };

// export default ProductDetails;  import { FaSortAmountUp } from "react-icons/fa";
// import useProducts from "../hooks/useProducts";
// import { IoTriangle } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Featured = () => {

//     const [products] = useProducts();
//     const latestProducts = products.sort((a, b)=> new Date(b.timestamp) - new Date(a.timestamp));
//     const featuredProducts = latestProducts.slice(0, 4);

//     return (
//         <div className="my-20">
//             <h1 className="text-3xl border-b-2 border-b-gray-400 mx-auto text-center md:w-4/12 my-8">Featured Products :</h1>
//             <p className="font-medium text-lg">Sorted by latest products- <FaSortAmountUp/></p>
//             <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-4 mx-4">
//                 {
//                     featuredProducts.map(item =>
//                         <div className="flex flex-row card bg-base-100 w-full shadow-lg p-2" key={item._id}>
//                             <img className="w-[120px] rounded-md mx-4" src={item.image_url} />
                            
//                             <div>
//                                 <Link to={/productDetails/${item._id}}><h3>Name: <button className="text-xl font-medium mb-2">{item.name}</button></h3></Link>
//                                 <h3><span className="underline">Tags:</span> <div className="font-medium italic grid grid-cols-1">{item.tags[0]}, {item.tags[1]}, {item.tags[2]}</div></h3>
//                             </div>
//                             <div className="mx-4 flex flex-col gap-3">
//                                 <div><span className="underline">Added on:</span> {new Date(item.timestamp).toLocaleString()}</div>
//                                 <button className="btn btn-outline btn-info"><IoTriangle /> UpVote</button>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//     );
// };

// export default Featured;  import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Helmet } from "react-helmet";

// const Login = () => {
// 	const { signIn, signInWithGoogle } = useContext(AuthContext);
// 	const notify = () => toast.error("Sorry! Infos are not matching");


// 	const handleLogin = e => {
// 		e.preventDefault();
// 		const form = new FormData(e.currentTarget);
// 		const email = form.get('email');
// 		const password = form.get('password');

// 		signIn(email, password)
// 			.then(res => {
// 				console.log(res.user);
// 				toast('Successfully logged in');
// 				e.target.reset();
// 			})
// 			.catch(err => { notify() })
// 	}

// 	const handleGoogle = () => {
// 		signInWithGoogle()
// 			.then(res => { console.log(res.user) })
// 			.catch(err => { console.log(err) })
// 	}


// 	return (
// 		<div className="flex bg-[#fbf3ec] justify-center">
// 			<div className="w-full max-w-xl p-4 rounded-md mb-20 sm:p-8  dark:text-gray-800">
// 				<h2 className="mb-3 mt-24 text-3xl font-semibold text-center">Login to your account</h2>
// 				<p className="text-sm text-center dark:text-gray-600">Don't have account?
// 					<Link to='/signUp' className="focus:underline hover:underline text-lg font-medium"> Sign up here</Link>
// 				</p>
// 				<div className="my-6 space-y-4">
// 					<button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border-2 rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-800 focus:dark:ring-violet-600">
// 						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
// 							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
// 						</svg>
// 						<p>Login with Google</p>
// 					</button>

// 				</div>
// 				<div className="flex items-center w-full my-4">
// 					<hr className="w-full dark:text-gray-600" />
// 					<p className="px-3 dark:text-gray-600">OR</p>
// 					<hr className="w-full dark:text-gray-600" />
// 				</div>
// 				<form onSubmit={handleLogin} className="space-y-8">
// 					<div className="space-y-4">
// 						<div className="space-y-2">
// 							<label htmlFor="email" className="block text-xl">Email address :</label>
// 							<input type="email" name="email" id="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
// 						</div>
// 						<div className="space-y-2">
// 							<div className="flex justify-between">
// 								<label htmlFor="password" className="text-xl">Password :</label>
// 							</div>
// 							<input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
// 						</div>
// 					</div>
// 					<button className="btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
// 				</form>
// 			</div>
// 			<Helmet>
//                 <title>Login</title>
//             </Helmet>
// 			<ToastContainer />
// 		</div>
// 	);
// };

// export default Login;  import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { toast, ToastContainer } from "react-toastify";
// import { Helmet } from "react-helmet";

// const SignUp = () => {
//     const { createUser } = useContext(AuthContext);

//     const handleSignUp = e => {
//         e.preventDefault();
//         const form = new FormData(e.currentTarget);
//         const email = form.get('email')
//         const password = form.get('password')

//         if (password.length < 6) {
//             alert('Password must contain minimum 6 characters')
//         }
//         else (toast('You have registered successfully'));

//         createUser(email, password)
//             .then(res => {
//                 console.log(res.user);
//                 e.target.reset()
//             })
//             .catch(err => { console.log(err) })

//     }

//     return (
//         <div className="flex justify-center  bg-[#fbf3ec]">
//             <div className="flex flex-col justify-center items-center my-24">
//                 <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
//                     <h2 className="mb-3 text-2xl font-semibold text-center">User Registration</h2>

//                     <form onSubmit={handleSignUp}>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name="email" placeholder="Email address" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Photo</span>
//                             </label>
//                             <input type="file" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control mt-6">
//                         </div>
//                         <button className="w-full px-8 py-3 mb-4 font-semibold rounded-md bg-blue-600 text-gray-50">Sign up</button>
//                     </form>
//                     <h2>Have an account? Go to <Link to='/login' className="font-bold">Login</Link></h2>
//                 </div>
//                 <ToastContainer />
//                 <Helmet>
//                 <title>Registration</title>
//             </Helmet>
//             </div>
//         </div>
//     );
// };

// export default SignUp;  import React, { useEffect, useState } from 'react';

// const ManageUsers = () => {
//     const [members, setMembers] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/members')
//             .then(res => res.json())
//             .then(data => setMembers(data));
//     }, []);

//     return (
//         <div>
//             <h1 className='text-center text-2xl font-medium underline mb-8'>Manage Users</h1>
//             <div className="overflow-x-auto">
//                 <table className="table table-zebra w-full">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Action</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             members.map((member, index) => <tr key={member._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{member.name}</td>
//                                 <td>{member.email}</td>
//                                 {/* <td>
//                                     {member.role === 'admin'? 'admin' : <button onClick={() => handleMakeAdmin(member)}
//                                         className="btn btn-ghost btn-lg text-red-600">
//                                     </button>}
//                                 </td>
//                                 <td>
//                                     <button onClick={() => handleDeleteUser(user)}
//                                         className="btn btn-ghost btn-lg text-red-600">
//                                     </button>
//                                 </td> */}
//                             </tr>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageUsers; 
// /////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const ProductReviewQueue = () => {
//     const [products, setProducts] = useState([]);
//     const [acceptedProducts, setAcceptedProducts] = useState({});
//     const [rejectedProducts, setRejectedProducts] = useState({});

//     useEffect(() => {
//         fetch('http://localhost:5000/products')
//             .then(res => res.json())
//             .then(data => setProducts(data));
//     }, []);

//     const handleFeatured = () => {
//         Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Marked this as featured",
//             showConfirmButton: false,
//             timer: 1500
//         });
//     };

//     const handleAccept = (id) => {
//         setAcceptedProducts(prevState => ({
//             ...prevState,
//             [id]: true
//         }));
//         Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Product Accepted",
//             showConfirmButton: false,
//             timer: 1500
//         });
//     };

//     const handleReject = (id) => {
//         setRejectedProducts(prevState => ({
//             ...prevState,
//             [id]: true
//         }));
//         Swal.fire({
//             position: "top-end",
//             icon: "warning",
//             title: "Product Rejected",
//             showConfirmButton: false,
//             timer: 1500
//         });
//     };
//     return (
//         <div className='lg:m-5 md:m-3 mt-6'>
//             <table className="table">
//                 <thead>
//                     <tr className="text-lg">
//                         <th>Name</th>
//                         <th>View Details</th>
//                         <th>Option</th>
//                         <th>Actions</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {products.map(product => (
//                         <tr key={product._id} className="font-medium">
//                             <td>{product.name}</td>
//                             <td>
//                                 <Link to={/productDetails/${product._id}} className="hover:underline">Details</Link>
//                             </td>
//                             <td>
//                                 <button onClick={handleFeatured} className="btn btn-ghost">Make Featured</button>
//                             </td>
//                             <td>
//                                 <button
//                                     onClick={() => handleAccept(product._id)}
//                                     className={btn ${acceptedProducts[product._id] ? 'btn-success' : 'btn-outline btn-accent'}}
//                                     disabled={acceptedProducts[product._id] || rejectedProducts[product._id]}
//                                 >
//                                     {acceptedProducts[product._id] ? 'Accepted' : 'Accept'}
//                                 </button>
//                             </td>
//                             <td>
//                                 <button
//                                     onClick={() => handleReject(product._id)}
//                                     className={btn ${rejectedProducts[product._id] ? 'btn-error' : 'btn-outline btn-warning'}}
//                                     disabled={acceptedProducts[product._id] || rejectedProducts[product._id]}
//                                 >
//                                     {rejectedProducts[product._id] ? 'Rejected' : 'Reject'}
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ProductReviewQueue;
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const ReportedContents = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/products')
//             .then(res => res.json())
//             .then(data => setProducts(data));
//     }, []);
//     const handleDelete = _id => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "Be sure to delete this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(http://localhost:5000/products/${_id}, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "The product has been deleted.",
//                                 icon: "success"
//                             })
//                             const remaining = spots.filter(cof => cof._id !== _id);
//                             setProducts(remaining)
//                         }
//                     })
//             }
//         });
//     }
    
//     return (
//         <div className='lg:m-5 md:m-3 mt-6'>
//             <table className="table">
//                 <thead>
//                     <tr className="lg:text-lg md:text-lg">
//                         <th>Product Name</th>
//                         <th>Option</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map(product => (
//                         <tr key={product._id} className="hover">
//                             <td>{product.name}</td>
//                             <td>
//                                 <Link to={/productDetails/${product._id}} className="hover:underline">Details</Link>
//                             </td>
//                             <td>
//                                 <button onClick={() => handleDelete(product._id)} className="btn btn-neutral">Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ReportedContents;  import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../providers/AuthProvider";

// const AddProduct = () => {
//     const {user} = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleAddProduct = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const image_url = form.image_url.value;
//         const description = form.description.value;
//         const tagsList = form.tags.value;
//         const external_link = form.external_link.value;
//         const owner = form.owner.value;
//         const owner_email = form.owner_email.value;
//         const owner_img = form.owner_img.value;
//         const tags = tagsList.split(',').map(tag => tag.trim());   
//         const newProduct = {
//             name, image_url, description, tags, external_link, owner, owner_email, owner_img,
//             timestamp: new Date()
//         }
//         console.log(newProduct);
//         fetch('http://localhost:5000/products', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(newProduct)
//         })
//         .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: 'Success',
//                         text: 'New Product added successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Done'
//                     })
//                 }
//             })
//             event.target.reset();
//             navigate('/dashboard/myProducts')
//     }
//     return (
//         <div className="ml-8">
//             <h1 className=' text-2xl font-medium underline mb-8'>Add a product</h1>
 
//             <form onSubmit={handleAddProduct}>
//                 <div className="flex lg:flex-row md:flex-row flex-col gap-8">
//                     <div className="">
//                         <p>Product Name :</p>
//                         <input type="text" name="name" className="input input-bordered mb-3" required/>
//                         <p>Product Image :</p>
//                         <input type="url" name="image_url" placeholder="type url" className="input mb-3 input-bordered w-56" required/><br />
//                         <p>Description :</p>
//                         <input type="text" name="description" className="input input-bordered mb-3" required/>
//                         <p>Tags :</p>
//                         <input type="text" name="tags" placeholder="e.g. Web App, Productivity, Task Management" className="input input-bordered mb-3" />
//                     </div>
//                     <div className="">
//                         <p>External Links :</p>
//                         <input type="url" name="external_link" className="input input-bordered mb-3" />
//                         <p>Owner name :</p>
//                         <input type="text" name="owner" disabled defaultValue={user.displayName} className="input input-bordered mb-3" required/>
//                         <p>Owner email :</p>
//                         <input type="email" name="owner_email" disabled defaultValue={user.email} className="input input-bordered mb-3" required/>
//                         <p>Owner img :</p>
//                         <input type="url" name="owner_img" disabled defaultValue={user.photoURL} className="input mb-3 input-bordered" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <button className="btn btn-accent w-52 lg:w-96 md:w-96 mt-6 text-lg">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddProduct;  import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import useCart from "../../../hooks/useCart";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useNavigate } from "react-router-dom";
// const CheckOutForm = () => {
//     const [error, setError] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();
//     const navigate = useNavigate();
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const [cart, refetch] = useCart();
//     const fixedAmount = 2000; 
//     const [clientSecret, setClientSecret] = useState("");
//     const [transactionId, setTransactionId] = useState('');
//     useEffect(() => {
//         axiosSecure.post('/create-payment-intent', { price: fixedAmount })
//             .then(res => {
//                 console.log(res.data.clientSecret);
//                 setClientSecret(res.data.clientSecret);
//             })
//             .catch(error => console.error('Error creating payment intent:', error));
//     }, [axiosSecure]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements) {
//             return;
//         }
//         const card = elements.getElement(CardElement);
//         if (card == null) {
//             return;
//         }
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         });

//         if (error) {
//             console.log('Payment error:', error);
//             setError(error.message);
//             return;
//         }
//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     email: user?.email || 'anonymous',
//                     name: user?.displayName || 'anonymous'
//                 }
//             }
//         });
//         if (confirmError) {
//             console.log('Confirm error:', confirmError);
//             setError(confirmError.message);
//         } else {
//             console.log('Payment Intent:', paymentIntent);
//             if (paymentIntent.status === 'succeeded') {
//                 console.log('Transaction ID:', paymentIntent.id);
//                 setTransactionId(paymentIntent.id);
//                 const payment = {
//                     email: user.email,
//                     price: fixedAmount / 100, 
//                     transactionId: paymentIntent.id,
//                     date: new Date(),
//                     cartIds: cart.map(item => item._id),
//                     menuItemIds: cart.map(item => item.menuId),
//                     status: 'pending'
//                 };
//                 try {
//                     const res = await axiosSecure.post('/payments', payment);
//                     console.log('Payment saved:', res.data);
//                     refetch();
//                 } catch (error) {
//                     console.error('Error saving payment:', error);
//                 }
//                 navigate('/dashboard/myProfile')
//             }
//         }
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '16px',
//                             color: '#424770',
//                             '::placeholder': {
//                                 color: '#aab7c4',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}
//             />
//             <button type="submit" className='btn-primary bg-indigo-600 p-2 my-4 text-2xl' disabled={!stripe || !clientSecret}>
//                 Pay $20
//             </button>
//             <p className='text-red-600'>{error}</p>
//             {transactionId && <p className='text-green-600'>Your transaction id: {transactionId}</p>}
//         </form>
//     );
// };
// export default CheckOutForm;
// ////////////////////////////////////////////////////////////////
// import Swal from "sweetalert2";
// import useCart from "../../../hooks/useCart";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// const MyProducts = () => {
//     const [product, refetch] = useCart();
//     const axiosSecure = useAxiosSecure();
//         const handleDelete = _id => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "Be sure to delete this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(/payments/${_id})
//                 .then(res => {
//                     if (res.data.deletedCount > 0) {
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your product has been deleted.",
//                             icon: "success"
//                         });
//                         refetch();
//                     }
//                 })
//             }
//         });
//     }
//     return (
//         <div className='lg:m-5 md:m-3 mt-6'>
//             <table className="table">
//                 <thead>
//                     <tr className="lg:text-lg md:text-lg">
//                         <th>Product Name</th>
//                         <th>Vote Numbers</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {product.map(item => (
//                         <tr key={item._id} className="hover">
//                             <td>{item.name}</td>
//                             <td>{item.upvote_count}</td>
//                             <td>Pending</td>
//                             <td>
//                                 {/* <button onClick={() => handleUpdate(item._id)} className="btn btn-accent">Update</button> */}
//                                 <button onClick={() => handleDelete(item._id)} className="btn btn-neutral">Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
// export default MyProducts; 

// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { MdVerifiedUser } from "react-icons/md";
// import { Link } from "react-router-dom";
// const MyProfile = () => {
//     const {user} = useContext(AuthContext);
//     return (
//         <div className="ml-12 space-y-3">
//             <h1 className="text-xl text-center underline mt-4"><span className="font-semibold">{user.displayName}</span>'s profile</h1>
//             <div>
//                 <img src={user.photoURL} alt="You don't have profile image" />
//                 <h4>{user.email}</h4>
//             </div>
//             <h2 className="text-xl">To be a member of <span className="font-semibold">TechWare</span> family, subscribe 
//             <Link to='/dashboard/payment' className="text-lg btn btn-info">$20</Link></h2>
//             <h3 className="text-lg flex flex-row items-center">User Membership Status: <span className="bg-green-400 border-2 font-medium"> Verified</span><MdVerifiedUser /></h3>
//         </div>
//     );
// };
// export default MyProfile;  import {Elements} from '@stripe/react-stripe-js';
// import { loadStripe } from "@stripe/stripe-js";
// import CheckOutForm from './CheckOutForm';

// const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publ_Key);
// const Payment = () => {
//     return (
//         <div className='ml-12 mt-4'>
//             <Elements stripe={stripePromise}>
//                 <CheckOutForm></CheckOutForm>
//             </Elements>
//         </div>
//     );
// };
// export default Payment;  

// import { CgProfile } from "react-icons/cg";
// import { FaHome } from "react-icons/fa";
// import { GoCodeReview, GoReport } from "react-icons/go";
// import { MdAddchart, MdManageAccounts, MdOutlineStoreMallDirectory } from "react-icons/md";
// import { NavLink, Outlet } from "react-router-dom";
// const Dashboard = () => {
//     return (
//         <div className="flex">
//             <div className="w-64 min-h-full bg-slate-300">
//                 <ul className="menu p-4 text-xl">
//                     <li>
//                         <NavLink to='/dashboard/myProfile'><CgProfile />My Profile</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/addProduct'><MdAddchart />Add Product</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/myProducts'><MdOutlineStoreMallDirectory />My Products</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/'><FaHome></FaHome>Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/productReview'><GoCodeReview/>Product Review</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/reportedContents'><GoReport/>Reported Contents</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/manageUsers'><MdManageAccounts/>Manage Users</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };
// export default Dashboard; 


// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// const AdminRoute = ({children}) => {
//     const {user, loading} = useAuth();
//     const location = useLocation();
//     if(loading){
//         return <progress className="progress w-56"></progress>
//     }
//         if(user){
//         return children;
//     }
//     return <Navigate to='/login' state={{from: location}} replace></Navigate>
// };
// export default AdminRoute;  
// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// const PrivateRoute = ({children}) => {
//     const {user} = useContext(AuthContext);
//     const location = useLocation();

//     if(user){
//         return children;
//     }
//     return (
//         <Navigate to='/login' state={{from: location}} replace/>
//     );
// };
// export default PrivateRoute;      
// /////////////////////////////////
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
// const useAdmin = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const { data: isAdmin } = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/members/admin/${user.email}`);
//             console.log(res.data);
//             return res.data?.admin;
//         }
//     })
//     return [isAdmin];
// };
// export default useAdmin;
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// const useAuth = () => {
//     const auth = useContext(AuthContext);
//     return auth;
// };
// export default useAuth;

// import axios from "axios";
// const axiosPublic = axios.create({
//     baseURL: 'http://localhost:5000'
// })
// const useAxiosPublic = () => {
//     return axiosPublic;
// };
// export default useAxiosPublic;

// import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
// const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5000'
// })
// const useAxiosSecure = () => {
//     // const navigate = useNavigate();
//     const {logOut} = useAuth();
//     axiosSecure.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('access-token');
//         config.headers.authorization = `Bearer ${token}`;
//         return config;
//     },
//         function (err) {
//             return Promise.reject(err)
//         });
//         axiosSecure.interceptors.response.use(function(response){
//             return response;
//         }, async (error)=>{
//             const status = error.response.status;
//             if(status === 401 || status === 403){
//                 await logOut();
//                 // navigate('/login')
//             }
//             return Promise.reject(error);
//         })
//     return axiosSecure;
// };
// export default useAxiosSecure;

// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
// const useCart = () => {
//     const axiosSecure = useAxiosSecure();
//     const {user} = useAuth();
//     const {refetch, data: product=[]} = useQuery({
//         queryKey: ['payment', user?.email],
//         queryFn: async()=>{
//             const res = await axiosSecure.get(`/payments?email=${user.email}`);
//             return res.data;
//         }
//     })
//     return [product, refetch];
// };
// export default useCart;

// import { useEffect, useState } from "react";
// const useProducts = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(()=>{
//         fetch('http://localhost:5000/products')
//         .then(res=>res.json())
//         .then(data=>setProducts(data))
//     },[])
//     return [products]
// };
// export default useProducts;

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// server-side: const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const app = express();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const port = process.env.PORT || 5000;
// const jwt = require('jsonwebtoken');
// //middleware
// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = mongodb+srv://${process.env.S3_BUCKET}:${process.env.SECRET_KEY}@cluster0.ku98crh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();

//     // middlewares
//      const verifyToken = (req, res, next) => {
//       console.log(req.headers);
//       if (!req.headers.authorization) {
//         return res.status(401).send({ message: 'unauthorized' })
//       }
//       const token = req.headers.authorization.split(' ')[1];
//       jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//           return res.status(401).send({ message: 'unauthorized' })
//         }
//         req.decoded = decoded;
//         next();
//       })
//     }
//     const productCollection = client.db('techDB').collection('products');
//         app.get('/products', async (req, res) => {
//       const cursor = productCollection.find();
//       const result = await cursor.toArray();
//       res.send(result);
//     })
//         app.get('/products/:id', async (req, res) => {
//       const productId = req.params.id;
//       const product = await productCollection.findOne({ _id: productId });
//       res.json(product)
//     })
//         app.post('/products', async (req, res) => {
//       const newProduct = req.body;
//       console.log(newProduct);
//       const result = await productCollection.insertOne(newProduct);
//       res.send(result);
//     })
//         app.get('/products/:id', async(req,res)=>{
//       const productId = req.params.id;
//       const query = {_id: productId}
//       const result = await productCollection.findOne(query);
//       res.send(result)
//     })
//     app.delete('/products/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: id }
//       const result = await productCollection.deleteOne(query);
//       res.send(result);
//     })

//     //search functionality
//     app.get('/search', async(req, res)=>{
//       const query = req.query.q;
//       const searchResult = await productCollection.find({
//         tags: {$regex:query, $options: 'i'}
//       }).toArray();
//       res.json(searchResult)
//       })
//     app.post('/jwt', async (req, res) => {
//       const user = req.body;
//       const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
//       res.send({ token })
//     })
    
//     const paymentCollection = client.db('bistroDB').collection('payments');
//     app.post('/create-payment-intent', async (req, res) => {
//       const { price } = req.body;
//       const amount = parseInt(price * 100);
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: amount,
//         currency: 'usd',
//         payment_method_types: ['card']
//       });
//       res.send({
//         clientSecret: paymentIntent.client_secret
//       })
//     })
//     app.post('/payments', async (req, res) => {
//       const payment = req.body;
//       const paymentResult = await paymentCollection.insertOne(payment);
//       //carefully delete each item from cart
//       console.log('payment info', payment);
//       const query = {
//         _id: {
//           $in: payment.cartIds.map(id => new ObjectId(id))
//         }
//       }
//       const deleteResult = await paymentCollection.deleteMany(query);
//       res.send({ paymentResult, deleteResult })
//     })
//     //authorize
//     const verifyAdmin = async (req, res, next) => {
//       const email = req.decoded.email;
//       const query = { email: email };
//       const member = await memberCollection.findOne(query);
//       if (member?.role !== 'admin') {
//         return res.status(403).send({ message: 'forbidden access' });
//       }
//       next();
//     }

//     const memberCollection = client.db('techDB').collection('members');
//     app.post('/members', async (req, res) => {
//       const member = req.body;
//       //insert email if member doesn't exists
//       const query = { email: member.email };
//       const existingMember = await memberCollection.findOne(query);
//       if (existingMember) {
//         return res.send({ message: 'member already exists', insertedId: null })
//       }
//       const result = await memberCollection.insertOne(member);
//       res.send(result);
//     })

//     app.get('/members', verifyAdmin, verifyToken,  async (req, res) => {
//       const result = await memberCollection.find().toArray();
//       res.send(result);
//     });
//     app.patch('/members/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const updatedDoc = {
//         $set: {
//           role: 'admin'
//         }
//       }
//       const result = await memberCollection.updateOne(filter, updatedDoc);
//       res.send(result);
//     })
//     app.get('/members/admin/:email', verifyToken, verifyAdmin, async (req, res) => {
//       const email = req.params.email;
//       if (email !== req.decoded.email) {
//         return res.status(403).send({ message: 'forbidden access' })
//       }
//       const query = { email: email };
//       const member = await memberCollection.findOne(query);
//       let admin = false;
//       if (member) {
//         admin = member.role === 'admin';
//       }
//       res.send({ admin })
//     })
  
//    // const reviewCollection = client.db('techDB').collection('posted_reviews');
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get('/', (req, res) => {
//   res.send('server-12 is running')
// })
// app.listen(port, () => {
//   console.log(Server is running on port: ${port});
// })











