import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { MdVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const MyProfile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="ml-6 lg:ml-12 md:ml-12 space-y-3">
            <h1 className="text-xl text-center underline mt-4"><span className="font-semibold">{user.displayName}</span>'s profile</h1>
            <div>
                <img src={user.photoURL} className="w-36" alt="You don't have profile image" />
                <h4>{user.email}</h4>
            </div>
            <h2 className="lg:text-xl text-lg">To be a member of <span className="font-semibold">TechWare</span> family, subscribe 
            <Link to='/dashboard/payment' className="lg:text-xl text-lg btn btn-info">$20</Link></h2>

            <h3 className="text-lg flex flex-row items-center">User Membership Status: <span className="bg-green-400 border-2 font-medium"> Verified</span><MdVerifiedUser /></h3>
            <Helmet>
                <title>User | My Profile</title>
            </Helmet>
        </div>
    );
};

export default MyProfile;