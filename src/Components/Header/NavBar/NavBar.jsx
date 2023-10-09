import { Link, NavLink } from 'react-router-dom';
import user from '../../../assets/Navbar/user.png'
import './NavBar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Utils/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const NavBar = () => {
  const {userInfo, handleSignOut, userName, userImg, loading} = useContext(AuthContext)
  
  console.log(userInfo);
  console.log('userinfo',userName, userImg);
  const navItem = <>

    <li> <NavLink to={'/'}> Home </NavLink></li>
    <li> <NavLink to={'/about'}> About Us </NavLink></li>
    <li> <NavLink to={'/service'}> Service </NavLink></li>
    {
      loading ? '' :
      userInfo ? '' : <> <li> <NavLink to={'/login'}> Login </NavLink></li>
      <li> <NavLink to={'/register'}> Register </NavLink></li> </>
    }
    



  </>
  return (
    <div className="navbar max-w-[1200px]  mx-auto bg-warning rounded-bl-3xl rounded-tr-3xl text-black my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <div><Link to={'/'} className="btn btn-ghost items-center hidden lg:flex normal-case text-base">Barnadha</Link></div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {navItem}

        </ul>
      </div>
      <div className="navbar-end gap-2">
        { loading ? <span className="loading loading-infinity loading-xs"></span> :
        userInfo?.displayName ? <h1 className='font-bold'>Welcome, {userInfo.displayName}</h1> : userInfo == null ? "": userInfo?.displayName == null && userName == undefined ? 'Anonymous' : <h1 className='font-bold'>Welcome, {userName}</h1> 
        }
        
        {
          userInfo ? <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {loading ? <span className="loading loading-infinity loading-xs"></span> :
                userInfo?.photoURL ? <img src={userInfo?.photoURL} /> : userInfo?.photoURL == null && userImg == undefined ? <img src={user}/> : <img src={userImg}/>
              }
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">Updating</span>
              </a>
            </li>
            <li>
              <a>Settings
              <span className="badge">Updating</span>
              </a>
            </li>
            <li><button onClick={()=> {
              toast.success('Successfully Log Out!')
              handleSignOut()
              }}>Logout</button></li>
          </ul>
        </div> : ''
        }
      </div>
    </div>
    );
};

export default NavBar;