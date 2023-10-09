import { useContext} from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";
import { FcGoogle} from "react-icons/fc"
import toast from "react-hot-toast";

const Register = () => {
  const {handleCreateUser,googleLogin} = useContext(AuthContext)

  const navigate = useNavigate()

  const googleSignIn = () => {
    googleLogin()
    .then(res => {
      if (res.user) {
        toast.success('successfully registered!')
        navigate(location?.state ? location.state : '/')
      }
    })
  }


  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const Img = form.get('Img');
    localStorage.setItem('userProfileInfo', JSON.stringify({name, Img}));
    const email = form.get('email');
    const password = form.get('password');

    if (!/[A-Z]/.test(password)) {

      
      toast.error("Please put a capital letter to your password")
      return
      
    } else if (!/[@#$%^&+=!]/.test(password)){
      toast.error("Please put a special character to your password")
      return
    }


    handleCreateUser(email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      if(user){
        toast.success('successfully registered!')
        navigate('/')
      }
      
      // ...
    })

    .catch((error) => {
    
      const errorMessage = error.message;
      // ..
      
      toast.error(errorMessage)
    });
   

  }



  
  return (

    <div className="max-w-[1200px] mx-auto">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" required name="Img" placeholder="Img url"  className="input input-bordered" />
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
        <div className="flex  ">
        
         
           <button onClick={googleSignIn} className="btn bg-white"><FcGoogle className="text-2xl"/></button>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Register</button>
        </div>
      </form>
     
    </div>
  );
};

export default Register;