import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(res => { console.log(res.user) })
      .catch(err => { console.log(err) })
  }

  const navLinks = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Products</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
  </>

  return (
    <div className="navbar max-w-screen-2xl mx-auto fixed z-10 bg-[#fbf3ec]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content 
      bg-indigo-950 rounded-box z-[1] mt-3 w-40 p-4 text-lg text-white">
            {navLinks}
          </ul>
        </div>
        <a className="font-medium text-2xl ml-4">TechWare</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 text-xl">
          {navLinks}
        </ul>
      </div>


      <div className="navbar-end">
        {
          user ?
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 bg-slate-400"><img className="w-16" src={user?.photoURL}></img></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>{user?.displayName}</li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </ul>
            </div>
            :
            <Link className="text-lg pr-10 btn" to='/login'>Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;