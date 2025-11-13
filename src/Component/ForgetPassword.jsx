import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const location = useLocation();
  const { sendPasswordResetEmailFunction,setLoading } = useContext(AuthContext);

  
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    try {
      await sendPasswordResetEmailFunction(email);
      setLoading(false);
      toast.success("Check your Gmail to reset password!");
      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
