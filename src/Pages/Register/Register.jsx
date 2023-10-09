import { useContext,} from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";

const Register = () => {
  const {handleCreateUser, handleUserName} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    handleUserName(name);
    const email = form.get('email');
    const password = form.get('password');


    handleCreateUser(email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      if(user){
        navigate('/')
      }
      
      // ...
    })
   

  }



  
  return (

    <div className="max-w-[1200px] mx-auto w-96">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={'/login'} href="/login" className="label-text-alt link link-hover">Already Have Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;