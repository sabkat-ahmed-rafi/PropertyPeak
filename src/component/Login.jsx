import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Authentication";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { GithubAuthProvider } from "firebase/auth";



const Login = () => {

  const {loginUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Login user 
    loginUser(email, password)
    .then(userCredential => {
      toast.success('You have successfully logged in.');
      navigate('/')

    }).catch(error => {
      toast.success(error.message);
    })
  };

  // Login user with Github
  const handleGithub = () => {
    const githubProvider = new GithubAuthProvider();
    loginWithGithub(githubProvider)
    .then(userCredential => {
      toast.success('You have successfully logged in.');
      navigate('/')
    }).catch(error => {
      toast.success(error.message);
    })
  }

  return (
    <>
      <section className="mx-24 px-16 mt-2">
        <div className="hero  bg-base-200 rounded-3xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="text-2xl font-bold">Welcome back!</div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control"> 
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-slate-900 text-white font-bold hover:text-black">
                    Login
                  </button>
                </div>
                <div className="font-bold mt-2">
                    <p>Not a member ?  <Link className="ml-2 text-blue-800" to="/register">Sign up</Link></p>
                </div>
              </form>
              {/* Login with Github  */}
              <button onClick={handleGithub}>
                <section className="flex p-3 mx-4 mb-8 bg-slate-200 rounded-md">
                    <FaGithub className="text-2xl font-bold" /> <p className="font-bold pl-14">Continue with Github</p>
                </section>
              </button>
              <div className="mb-5 mx-4 text-gray-500">
                <small className=" font-semibold">By continuing, you agree to ProPertyPeak’s <span className="underline cursor-pointer">Terms of Use</span>. Read our <span className="underline cursor-pointer
                ">Privacy Policy</span></small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
