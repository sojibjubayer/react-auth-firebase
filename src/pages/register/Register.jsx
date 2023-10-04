import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";






const Register = () => {

    const { createUser }= useContext(AuthContext);

    const handleLogin= e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name= form.get('name');
        const photoUrl=form.get('photo-url')
        const email=form.get('email');
        const password =form.get('password');
        // console.log(name,photoUrl,email,password);

        //create user

        createUser(email,password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please register!</h1>
                         </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo-url" placeholder="photo-url" className="input input-bordered" required />
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p >Already have an account? Pleage <Link className="text-blue-600" to='/login'>Login</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

