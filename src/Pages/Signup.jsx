
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { auth } from "../Firebase/realEstates";
import { AuthContext } from "../Context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPassFunction,
    updateProfileFunction,
    setLoading,
    signOutFunction,
    setUser,
  } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter"
      );
      return;
    }

    createUserWithEmailAndPassFunction(email, password)
      .then(() => {
        setLoading(false);
        updateProfileFunction(displayName, photoURL)
          .then(() => {})
          .catch(() => {});
        signOutFunction()
          .then(() => {
            toast.success("Signup successful");
            setUser(null);
            navigate("/login");
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database");
        } else if (e.code === "auth/weak-password") {
          toast.error("Password must be in 6 digits ");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
        }
      });
  };

  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Signin successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="w-full max-w-md bg-fuchsia-100 shadow-2xl rounded-2xl p-8 mx-auto my-10">
      <title>Sign Up Page</title>
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Photo Url</label>
          <input
            type="text"
            name="photo"
            required
            placeholder="Your Photo Url"
            className="input input-bordered w-full bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            required
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

        <button type="submit" className="btn w-full bg-cyan-100">
          Sign Up
        </button>

        <div className="flex items-center justify-center gap-2 my-2">
          <div className="h-px w-16 text-black"></div>
          <span className="text-sm ">or</span>
          <div className="h-px w-16 "></div>
        </div>

    
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Signup with Google
        </button>

        <div className="text-center mt-3">
          <p className="text-sm ">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-pink-300 font-medium underline "
            >
              log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
