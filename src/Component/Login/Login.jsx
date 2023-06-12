import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContest } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formRef = useRef(null);
  const { signIn, googleSignIn } = useContext(AuthContest);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const location = useLocation();
  const frm = location.state?.frm?.pathname || '/';

  const formLogin = (event) => {
    event.preventDefault();
    setError('')
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setError('At least six character password and Password must have one special character and one uppercase letter');
      return;
    }

    formRef.current.reset();
    if (email, password) {
      signIn(email, password) 
        .then(result => {
          const myUser = result.user;
          console.log(myUser);
          navigate(frm, { replace: true });
          setError('');
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
        });
        navigate(frm, { replace: true });

    }
  };
  // Google
  const handleGoogle = () => {
    googleSignIn()
      .then(res => {
        const loggedUser= res.user;
        console.log(loggedUser);


        const saveLoggedUser = {email: loggedUser.email,name:loggedUser.displayName}
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
                navigate(frm, { replace: true });
                }
              })
      })
  };
  //   const formLogin = event => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(email, password);
  //     signIn(email, password)
  //         .then(result => {
  //             const user = result.user;
  //             console.log(user);
  //             Swal.fire({
  //               position: 'center',
  //               icon: 'success',
  //               title: 'successfully login',
  //               showConfirmButton: false,
  //               timer: 1500
  //           });
  //             navigate(from, {replace: true });
  //         })
  // }

  const { register, formState: { errors } } = useForm();


  return (

    <div>
      <Helmet>
        <title>Crazy Camp | Login</title>
      </Helmet>

      <form onSubmit={formLogin} ref={formRef}>
        <div className="hero min-h-screen bg-base-20 w-full">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
              <div className="card-body">
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email:</span>
                  </label>
                  <input type="email" name="email"  {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
                  {errors.name && <span className="text-red-800">Email not given</span>}
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input name="password"
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
                        <FaEye />
                      ) : (
                        <FaEyeSlash />
                      )}
                    </button>
                  </div>
                  {error.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {error.password?.type === "minLength" && (
                    <p className="text-red-600">At least six characters password needed</p>
                  )}
                  {error.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one special character and one uppercase letter
                    </p>
                  )}
                </div>
                {/* Button */}
                <div className="form-control mt-2">
                  <input className="btn btn-primary text-white" type="submit" value="Login" />
                </div>

                <p className="text-blue-600 mt-3">Haven't Account? <Link to='/register' >Do Registration</Link></p>

                {/* Google login */}
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="divider">OR</div>
                  <div className=' text-center'>
                    <button onClick={handleGoogle} className="btn btn-warning btn-circle mb-2 bg-orange-600 text-white"> G </button>
                  </div>
                </div>

                <p className='text-red-700'>{error}</p>

              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default Login;