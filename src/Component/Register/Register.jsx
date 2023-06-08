import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
    console.log(watch("example"));


    return (
        <div >
            <div>
                <div className="hero min-h-screen bg-base-20 w-full">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mt-20">Registration now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                            <div className="card-body">

                                {/* name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name:</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-800">Name not given</span>}
                                </div>

                                {/* email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} placeholder="Your Email" className="input input-bordered" />
                                    {errors.name && <span className="text-red-800">Email not given</span>}
                                </div>

                                {/* password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {value: 6, message: 'Password at least 6 characters',
                                            },
                                            pattern: {
                                                value: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                                                message: 'Password must contain at least one uppercase letter and one special character',
                                            },
                                        })}
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    {errors.password && <p className="text-red-800">{errors.password.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register('confirmPassword', {
                                            validate: (value) => value === password || 'Passwords do not match',
                                        })}
                                        placeholder="confirm password"
                                        className="input input-bordered"
                                    />
                                    {errors.confirmPassword && <p className="text-red-800">{errors.confirmPassword.message}</p>}
                                </div>

                                {/* Url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-file">Your Photo URL:</span>

                                    </label>
                                    <label className="input-group">
                                        <input type="file"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" />
                                    </label>

                                </div>
                                <p className="text-blue-600 mt-3 text-center">Already Register? <Link to='/register' >Do Login</Link></p>

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
    );
};

export default Register;