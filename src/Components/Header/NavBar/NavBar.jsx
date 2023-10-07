import { NavLink } from 'react-router-dom';
import user from '../../../assets/Navbar/user.png'
import './NavBar.css'
const NavBar = () => {
  const navItem = <>

    <li> <NavLink to={'/'}> Home </NavLink></li>
    <li> <NavLink to={'/about'}> About Us </NavLink></li>
    <li> <NavLink to={'/service'}> Service </NavLink></li>



  </>
  return (
    <div className="navbar max-w-[1200px]  mx-auto bg-warning rounded-2xl text-black my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <div><a className="btn btn-ghost items-center hidden lg:flex normal-case text-base">Event Management</a></div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {navItem}

        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default NavBar;