import { useState } from "react";
import { TextField, Button } from "@mui/material";
import MailLockSharpIcon from "@mui/icons-material/MailLockSharp";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    console.log("Password reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="hidden lg:flex w-1/2 bg-gray-950 items-center justify-center relative">
        <img
          src="/doctor.jpg"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-10 text-white max-w-md text-center">
          <h1 className="text-6xl font-bold mb-4">Healthlink</h1>
          <p className="text-2xl opacity-80 leading-relaxed">
            A good laugh & a long sleep are the best cures in the doctor's book.
          </p>
        </div>
      </div>


      <div className="flex w-full lg:w-1/2 justify-center items-center p-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">

          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" className="h-16" />
          </div>


          <h2 className="flex items-center justify-center text-2xl font-bold text-gray-700 mb-6">
            <MailLockSharpIcon className="mr-2 text-blue-600" /> Forgot Password
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!submitted ? (
              <>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#1976d2",
                    "&:hover": { backgroundColor: "#115293" },
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  Send Reset Link
                </Button>
              </>
            ) : (
              <p className="text-green-600 text-center font-medium">
                ✅ A reset link has been sent to your email.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
