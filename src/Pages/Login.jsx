// // import React, { useContext, useRef, useState } from "react";
// // import { Link, useLocation, useNavigate } from "react-router";
// // import { FaEye } from "react-icons/fa";
// // import { IoEyeOff } from "react-icons/io5";
// // import { toast } from "react-toastify";
// // import { AuthContext } from "../Context/AuthContext";

// // const Login = () => {
// //   const [show, setShow] = useState(false);
// //   const {
// //     user,
// //     setUser,
// //     signInWithEmailAndPassFunction,
// //     signInWithEmailFunction,
// //     sendPasswordResetEmailFunction,
// //     setLoading,
// //   } = useContext(AuthContext);

// //   const location = useLocation();
// //   const from = location.state || "/";
// //   const navigate = useNavigate();

// //   if (user) {
// //     navigate("/");
// //     return;
// //   }
// //   const emailRef = useRef(null);
 
// //   const handleSignin = (e) => {
// //   e.preventDefault();
// //   const email = e.target.email?.value.trim();
// //   const password = e.target.password?.value.trim();

// //   if (!email || !password) {
// //     toast.error("Please fill in both email and password!");
// //     return; 
// //   }

// //   signInWithEmailAndPassFunction(email, password)
// //     .then((res) => {
// //       setLoading(false);
// //       setUser(res.user);
// //       toast.success("Signin successful");
// //       navigate(from);
// //     })
// //     .catch((e) => {
// //       setLoading(false);
// //       toast.error("Invalid email or password!");
// //     });
// // };


// //   const handleGoogleSignin = () => {
// //     signInWithEmailFunction()
// //       .then((res) => {
// //         setLoading(false);
// //         setUser(res.user);
// //         navigate(from);
// //         toast.success("Signin successful");
// //       })
// //       .catch((e) => {
// //         toast.error(e.message);
// //       });
// //   };

// //   const handleForgetPassword = () => {
// //     const email = emailRef.current.value;
// //     navigate("/forget-password", { state: { email } });
// //     sendPasswordResetEmailFunction(email)
// //       .then(() => {
// //         setLoading(false);
// //       })
// //       .catch((e) => {
// //         toast.error(e.message);
// //       });
// //   };

// //   return (
// //     <div className="w-full max-w-md backdrop-blur-lg bg-fuchsia-100 border border-white/20 shadow-2xl rounded-2xl p-4  mx-auto my-20">
// //       <title>Sign in Page</title>
// //       <form onSubmit={handleSignin} className="space-y-5">
// //         <h2 className="text-2xl font-semibold mb-2 text-center">Sign In</h2>

// //         <div>
// //           <label className="block text-sm mb-1">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             ref={emailRef}
// //             placeholder="example@email.com"
// //             className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
// //           />
// //         </div>

// //         <div className="relative">
// //           <label className="block text-sm mb-1">Password</label>
// //           <input
// //             type={show ? "text" : "password"}
// //             name="password"
// //             placeholder="••••••••"
// //             className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
// //           />
// //           <span
// //             onClick={() => setShow(!show)}
// //             className="absolute right-2 top-9 cursor-pointer z-50"
// //           >
// //             {show ? <FaEye /> : <IoEyeOff />}
// //           </span>
// //         </div>
// //         <button
// //           className="hover:underline cursor-pointer"
// //           onClick={handleForgetPassword}
// //           type="button"
// //         >
// //           Forget Password?
// //         </button>

// //         <button type="submit" className="btn w-full bg-cyan-100">
// //           Login
// //         </button>

// //         <div className="flex items-center justify-center gap-2 my-2">
// //           <div className="h-px w-16 text-black"></div>
// //           <span className="text-sm ">or</span>
// //           <div className="h-px w-16 "></div>
// //         </div>

// //         <button
// //           type="button"
// //           onClick={handleGoogleSignin}
// //           className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
// //         >
// //           <img
// //             src="https://www.svgrepo.com/show/475656/google-color.svg"
// //             alt="google"
// //             className="w-5 h-5"
// //           />
// //           Continue with Google
// //         </button>

// //         <p className="text-center text-sm mt-3">
// //           Don’t have an account?{" "}
// //           <Link
// //             to="/signup"
// //             className="text-pink-300 hover:text-white underline"
// //           >
// //             Sign up
// //           </Link>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useContext, useEffect, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaEye } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";
// import { toast } from "react-toastify";
// import { AuthContext } from "../Context/AuthContext";

// const Login = () => {
//   const [show, setShow] = useState(false);
//   const {
//     user,
//     setUser,
//     signInWithEmailAndPassFunction,
//     signInWithEmailFunction,
//     sendPasswordResetEmailFunction,
//     setLoading,
//   } = useContext(AuthContext);

//   const location = useLocation();
//   const from = location.state || "/";
//   const navigate = useNavigate();
//   const emailRef = useRef(null);

//   // if (user) {
//   //   navigate("/");
//   //   return null;
//   // }
//   useEffect(() => {
//   if (user) {
//     navigate("/");
//   }
// }, [user]);

// if (user) {
//   return null;
// }

//   const saveUserToDB = (userData) => {
//     fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//   };

//   const handleSignin = (e) => {
//     e.preventDefault();
//     const email = e.target.email?.value.trim();
//     const password = e.target.password?.value.trim();

//     if (!email || !password) {
//       toast.error("Please fill in both email and password!");
//       return;
//     }

//     signInWithEmailAndPassFunction(email, password)
//       .then((res) => {
//         setLoading(false);
//         setUser(res.user);
//         toast.success("Signin successful");

//         const userData = {
//           name: res.user.displayName || "Anonymous",
//           email: res.user.email,
//           photoURL: res.user.photoURL || "https://i.ibb.co/default-avatar.png",
//         };
//         saveUserToDB(userData);

//         navigate(from);
//       })
//       .catch(() => {
//         setLoading(false);
//         toast.error("Invalid email or password!");
//       });
//   };

//   const handleGoogleSignin = () => {
//     signInWithEmailFunction()
//       .then((res) => {
//         setLoading(false);
//         setUser(res.user);
//         toast.success("Signin successful");

//         const userData = {
//           name: res.user.displayName,
//           email: res.user.email,
//           photoURL: res.user.photoURL,
//         };
//         saveUserToDB(userData);

//         navigate(from);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

//   const handleForgetPassword = () => {
//     const email = emailRef.current.value;
//     navigate("/forget-password", { state: { email } });
//     sendPasswordResetEmailFunction(email)
//       .then(() => {
//         setLoading(false);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

//   return (
//     <div className="w-full max-w-md backdrop-blur-lg bg-fuchsia-100 border border-white/20 shadow-2xl rounded-2xl p-4 mx-auto my-20">
//       <title>Sign in Page</title>
//       <form onSubmit={handleSignin} className="space-y-5">
//         <h2 className="text-2xl font-semibold mb-2 text-center">Sign In</h2>

//         <div>
//           <label className="block text-sm mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             ref={emailRef}
//             placeholder="example@email.com"
//             className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//         </div>

//         <div className="relative">
//           <label className="block text-sm mb-1">Password</label>
//           <input
//             type={show ? "text" : "password"}
//             name="password"
//             placeholder="••••••••"
//             className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//           <span
//             onClick={() => setShow(!show)}
//             className="absolute right-2 top-9 cursor-pointer z-50"
//           >
//             {show ? <FaEye /> : <IoEyeOff />}
//           </span>
//         </div>

//         <button
//           className="hover:underline cursor-pointer"
//           onClick={handleForgetPassword}
//           type="button"
//         >
//           Forget Password?
//         </button>

//         <button type="submit" className="btn w-full bg-cyan-100">
//           Login
//         </button>

//         <div className="flex items-center justify-center gap-2 my-2">
//           <div className="h-px w-16 text-black"></div>
//           <span className="text-sm">or</span>
//           <div className="h-px w-16"></div>
//         </div>

//         <button
//           type="button"
//           onClick={handleGoogleSignin}
//           className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             alt="google"
//             className="w-5 h-5"
//           />
//           Continue with Google
//         </button>

//         <p className="text-center text-sm mt-3">
//           Don’t have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-pink-300 hover:text-white underline"
//           >
//             Sign up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [show, setShow] = useState(false);
  const {
    user,
    setUser,
    signInWithEmailAndPassFunction,
    signInWithEmailFunction,
    sendPasswordResetEmailFunction,
    setLoading,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();
  const emailRef = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (user) return null;

  const saveUserToDB = async (userData) => {
    try {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    } catch (err) {
      console.error("User save failed:", err);
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value.trim();
    const password = e.target.password?.value.trim();

    if (!email || !password) {
      toast.error("Please fill in both email and password!");
      return;
    }

    signInWithEmailAndPassFunction(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Signin successful");

        const userData = {
          name: res.user.displayName || "Anonymous",
          email: res.user.email,
          photoURL: res.user.photoURL || "https://i.ibb.co/default-avatar.png",
        };
        saveUserToDB(userData);
        navigate(from);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Invalid email or password!");
      });
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunction()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Signin successful");

        const userData = {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        };
        saveUserToDB(userData);
        navigate(from);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
    navigate("/forget-password", { state: { email } });
    sendPasswordResetEmailFunction(email)
      .then(() => {
        setLoading(false);
        toast.success("Password reset email sent!");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="w-full max-w-md backdrop-blur-lg bg-fuchsia-100 border border-white/20 shadow-2xl rounded-2xl p-4 mx-auto my-20">
      <form onSubmit={handleSignin} className="space-y-5">
        <h2 className="text-2xl font-semibold mb-2 text-center">Sign In</h2>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="example@email.com"
            className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-2 top-9 cursor-pointer z-50"
          >
            {show ? <FaEye /> : <IoEyeOff />}
          </span>
        </div>

        <button
          className="hover:underline cursor-pointer"
          onClick={handleForgetPassword}
          type="button"
        >
          Forget Password?
        </button>

        <button type="submit" className="btn w-full bg-cyan-100">
          Login
        </button>

        <div className="flex items-center justify-center gap-2 my-2">
          <div className="h-px w-16 text-black"></div>
          <span className="text-sm">or</span>
          <div className="h-px w-16"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignin}
          className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-3">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-300 hover:text-white underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
