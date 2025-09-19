import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Loader from "../../components/loader/index.jsx";
import InputField from "../../components/inputField/index.jsx";
import CustomButton from "../../components/Buttons/index.jsx";


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Full name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.password) newErrors.password = "Password is required!";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password!";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((user) => user.email === formData.email);

    if (userExists) {
      setErrors({ email: "🚫 User with this email already exists!" });
      return;
    }

    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("currentUser", JSON.stringify(formData));


    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2000);
  };


  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex w-1/2 bg-gray-950 items-center justify-center relative"
      >
        <img
          src="/doctor.jpg"
          alt="Healthcare"
          className="absolute max-w-5xl inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-10 text-white max-w-md">
          <h1 className="text-6xl font-bold mb-4">Healthlink</h1>
          <p className="text-3xl opacity-50">
            A good laugh & a long sleep are the best cures in the doctor's book.
          </p>
        </div>
      </motion.div>

  
      <div className="flex w-full lg:w-1/2 justify-center items-center p-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-2xl"
        >
      
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <img src="/image/logo.png" alt="Logo" className="h-20 " />
          </motion.div>

  
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl font-bold mb-8 text-center text-gray-800"
          >
            Hello!...
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.01 }}
              style={{ display: "inline-block", originY: 0.7 }}
            >
              🖐
            </motion.span>
          </motion.h2>

          {/* Form */}
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}>

            <InputField fullWidth label={"Full name"} name="name" placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => {
                const regex = /^[a-zA-Z\s]*$/;
                if (regex.test(e.target.value)) {
                  setFormData({ ...formData, name: e.target.value });
                  setErrors({ ...errors, name: "" });
                } else {
                  setErrors({ ...errors, name: "Only letters are allowed" });
                }
              }}
              error={errors.name}
              helperText={errors.name} />

            <InputField fullWidth name="email" placeholder="Enter your email" type="email"
              label={"Email"}
              sx={{ mb: 1 }}
              value={formData.email}
              onChange={(e) => {
                const regex = /^[a-zA-Z0-9@._%+\-]*$/;
                if (regex.test(e.target.value) || e.target.value === "") {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                } else {
                  setErrors({ ...errors, email: "Enter a valid email address" });
                }
              }}
              error={Boolean(errors.email)}
              helperText={errors.email} />


            <InputField fullWidth name="password" placeholder="Enter your Password" type="password"
              label={"Password"}
              sx={{ mb: 1 }}
              value={formData.password}
              onChange={(e) => {
                const value = e.target.value;
                const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
                if (!passwordRegex.test(value)) {
                  setErrors({ ...errors, password: "Invalid characters in password" });
                  return;
                }
                setFormData({ ...formData, password: value });
                if (value.length < 6) {
                  setErrors({ ...errors, password: "Password must be at least 6 characters" });
                }
                else if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {
                  setErrors({ ...errors, password: "Must include at least 1 letter and 1 number" });
                }
                else {
                  setErrors({ ...errors, password: "" });
                }
              }}
              error={Boolean(errors.password)}
              helperText={errors.password} />

              

            <InputField fullWidth name="confirmPassword" placeholder="Re-enter Password" type="password"
              label={"Confirm Password"}
              sx={{ mb: 1 }}
              value={formData.confirmPassword}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, confirmPassword: value });
                if (value !== formData.password) {
                  setErrors({ ...errors, confirmPassword: "passwords do not match!" });
                } else {
                  setErrors({ ...errors, confirmPassword: "" });
                }
              }}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword} />

            <div className="mt-6">
              <CustomButton type="submit" variant="contained">
                {loading ? "Signing..." : "Sign Up"}
              </CustomButton>
            </div>

          </motion.form>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
            className="text-center mt-8 text-gray-600 text-lg">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 hover:underline font-semibold">
              Log In
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;

