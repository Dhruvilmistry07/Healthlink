import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import InputField from "../../components/inputField/index.jsx";
import CustomButton from "../../components/Buttons/index.jsx";

const Login = () => {
  const [loading, setLoading] = useState(false);
    
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      
      // navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  let newErrors = {};

  if (!formData.email) newErrors.email = "Email is required!";
  if (!formData.password) newErrors.password = "Password is required!";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setLoading(false); 
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const matchedUser = users.find(
    (user) =>
      user.email === formData.email && user.password === formData.password
  );

  if (!matchedUser) {
    setErrors({ email: "Invalid email or password", password: " " });
    setLoading(false); 
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(matchedUser));

  setTimeout(() => {
    setLoading(false);
    navigate("/home"); 
  }, 2000);
};


  

  return (
    <motion.div
      className="flex min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Section */}
      <motion.div
        className="hidden lg:flex w-1/2 bg-gray-950 items-center justify-center relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/doctor.jpg"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-10 text-white max-w-md">
          <h1 className="text-6xl font-bold mb-4">Healthlink</h1>
          <p className="text-3xl opacity-50">
            A good laugh & a long sleep are the best cures in the doctor's book.
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex w-full lg:w-1/2 justify-center items-center p-8"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <img src="/image/logo.png" alt="Logo" className="h-20" />
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit}>
            
            <InputField fullWidth name="email" label={"Email"} placeholder="Enter your email" type="email"
              sx={{ mb: 1 }}
              value={formData.email}
              onChange={(e) => {
                const regex = /^[a-zA-Z0-9@._-]*$/;
                if (regex.test(e.target.value)) {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                } else {
                  setErrors({ ...errors, email: "Enter valid email addresss" });
                }
              }}
              error={Boolean(errors.email)}
              helperText={errors.email} />

           
            <InputField fullWidth placeholder="Enter your password" name="password"
              type="password"
              label={"Password"}
              sx={{ mb: 1 }}
              value={formData.password}
              onChange={(e) => {
                const value = e.target.value;
                const regex =
                  /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{0,}$/;
                if (regex.test(value)) {
                  setFormData({ ...formData, password: value });
                  if (value.length < 6) {
                    setErrors({
                      ...errors,
                      password: "Password must be at least 6 characters",
                    });
                  } else {
                    setErrors({ ...errors, password: "" });
                  }
                }
              }}
              error={Boolean(errors.password)}
              helperText={errors.password} />

            <div className="text-right">
              <Link
                to="/forget-password"
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot Password?
              </Link>
            </div>

            <CustomButton type="submit" variant="contained">
              {loading ? "Logging..." : "Login"}
            </CustomButton>
            

          </form>

          <p className="text-center mt-6 text-gray-600 text-sm">
            Don’t have an account?
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;




