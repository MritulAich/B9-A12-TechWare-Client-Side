import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { GoCodeReview, GoReport } from "react-icons/go";
import { MdAddchart, MdManageAccounts, MdOutlineStoreMallDirectory } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="lg:w-64 md:w-64 w-36 min-h-min bg-slate-300 ">
                <ul className="menu lg:p-4 p-2 lg:text-xl md:text-xl text-lg">
                    <li>
                        <NavLink to='/dashboard/myProfile'><CgProfile />My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addProduct'><MdAddchart />Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/myProducts'><MdOutlineStoreMallDirectory />My Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>


                    <li>
                        <NavLink to='/dashboard/productReview'><GoCodeReview/>Product Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reportedContents'><GoReport/>Reported Contents</NavLink>
                    </li>


                    <li>
                        <NavLink to='/dashboard/manageUsers'><MdManageAccounts/>Manage Users</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;