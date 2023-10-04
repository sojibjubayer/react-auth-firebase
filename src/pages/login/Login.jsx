import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const location =useLocation();
    // console.log('location in login page:',location);
    const navigate = useNavigate();
 
    const {signIn} = useContext(AuthContext)

        const handleLogin= e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            
            const email=form.get('email');
            const password =form.get('password');
            console.log(email,password);

            //sign in
            signIn(email,password)
            .then(result=>{
                navigate(location.state? location.state:'/')
            })
            .catch()

        }

    return (
        <div>
            <Navbar></Navbar>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p >New here? Pleage <Link className="text-blue-600" to='/register'>Register</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;