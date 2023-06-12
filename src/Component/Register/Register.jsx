import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContest } from "../AuthProvider/AuthProvider";
import {  FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
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
    const { createUser, updateUserProfile } = useContext(AuthContest);

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const logginUser = result.user;
                console.log(logginUser);
                formRef.current.reset();  

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveLoggedUser = {email: data.email,name:data.name}
                        fetch('https://assignment-12-server-muntasirrifat23.vercel.app/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveLoggedUser)
                        })
                       // formRef.current.reset();  

                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'successfully register',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    // formRef.current.reset();  
                              }  
                            });
                    })
                    .catch(error => console.log(error))
            });
    };

    return (
        <div>
            <Helmet>
                <title>Crazy Camp | Registration</title>
            </Helmet> 
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mt-20">Registration now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body"> 
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Enter Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>                      
                            
                                {/* Pass */}
<div className="form-control">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      {...register("password", {
        required: true,
        minLength: 6,
        maxLength: 20,
        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-6])/
      })}
      placeholder="Enter Password"
      className="input input-bordered pr-12"
    />
    <button
      type="button"
      className="bg-black text-center text-white font-bold btn btn-primary btn-circle"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? (
        <FaEye/>
      ) : (
        <FaEyeSlash/>
      )}
    </button>
  </div>
  {errors.password?.type === "required" && (
    <p className="text-red-600">Password is required</p>
  )}
  {errors.password?.type === "minLength" && (
    <p className="text-red-600">At least six characters password needed</p>
  )}
  {errors.password?.type === "pattern" && (
    <p className="text-red-600">
      Password must have one special character and one uppercase letter
    </p>
  )}
</div>

{/* confirm password */}
<div className="form-control">
  <label className="label">
    <span className="label-text">Confirm Password</span>
  </label>
  <div className="relative">
    <input
      type={showConfirmPassword ? "text" : "password"}
      {...register("confirmPassword", {
        required: true,
        validate: (value) =>
          value === watch("password") || "Passwords do not match"
      })}
      placeholder="Confirm Password"
      className="input input-bordered pr-12"
    />
    <button
      type="button"
      className="bg-black  text-center text-white font-bold btn btn-primary btn-circle"
      onClick={toggleConfirmPasswordVisibility}
    >
      {showConfirmPassword ? (
       <FaEye/>
       ) : (
         <FaEyeSlash/>
      )}
    </button>
    {errors.confirmPassword && (
    <p className="text-red-600">{errors.confirmPassword.message}</p>
  )}
  </div>
                            {/* url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="file"  {...register("photoURL")} placeholder="Give Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">URL not given</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                                <p className="text-blue-600 mt-3">Already Have Account? <Link to='/login' >Do Login</Link></p>

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
                </div>
                </div>

            </form>
        </div>
    );
};

export default Register;