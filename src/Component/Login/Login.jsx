import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContest } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useRef, useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formRef = useRef(null);
  
  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }; 
    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

 const { register,watch, handleSubmit, formState: { errors } } = useForm();
 const onSubmit

  return (

    <div>
      <Helmet>
        <title>Crazy Camp | Login</title>
      </Helmet>
      <form>
        <div className="hero min-h-screen bg-base-20 w-full">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
              {/* form */}

              <div className="card-body">

                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email:</span>
                  </label>
                  <input type="email"  {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                  {errors.name && <span className="text-red-800">Email not given</span>}
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password"  {...register("password", { minLength: 6, required: true, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} placeholder="password" className="input input-bordered" />
                  {errors.password?.type === 'required' && <h1 className="text-red-800">Password is required</h1>}

                  {errors.password?.type === 'minLength' && <h1 className="text-red-800">Password must be 6 characters</h1>}

                  {errors.password?.type === 'pattern' && <h1 className="text-red-800">Password must contain at least one uppercase letter and one special character.
                  </h1>}
                </div>
                {/* Button */}
                <div className="form-control mt-2">
                  <input className="btn btn-primary text-white" type="submit" value="Login" />
                </div>

                <p className="text-blue-600 mt-3">Haven't Account? <Link to='/register' >Do Registration</Link></p>

                {/* Google login */}
                <div>
                  <div className="divider">OR</div>
                  <div className="text-center">
                    <div className=" bg-orange-600  text-center text-white font-bold text-2xl btn btn-circle">G</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default Login;