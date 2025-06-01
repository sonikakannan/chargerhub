import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ isMobile, onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ token: res.token }));
      navigate("/");
    } catch (err) {
      window?.toast?.error?.(
        err?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div
      className={`flex flex-col pb-20 ${
        isMobile
          ? "items-center justify-between"
          : "items-center justify-center"
      } h-full`}
    >
      {/* Mobile Top Welcome Overlay */}
      {isMobile && (
        <div className="flex flex-col items-center rounded-b-[100px] bg-[#042784] w-full p-5 justify-center h-[35%]">
          <p className="text-white py-2 text-3xl font-semibold">
            Welcome Back!
          </p>
          <p className="text-white pb-2 text-sm font-semibold mb-3">
            Don't have an account?
          </p>
          <button
            className="text-lg font-semibold w-32 h-10 border border-white rounded-md text-white hover:bg-white hover:text-[#042784] cursor-pointer"
            onClick={onSignUp}
          >
            Sign Up
          </button>
        </div>
      )}

      <form
        className={`${isMobile ? "w-full px-8 " : "w-full p-10"}`}
        onSubmit={handleSubmit}
      >
        <h1
          className={`text-center text-[#333] font-bold ${
            isMobile ? "text-3xl mb-6" : "text-4xl mb-6"
          }`}
        >
          Login
        </h1>
        <div className="relative my-5">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3.5 pr-12 pl-5 bg-white rounded-lg border-none outline-none text-lg text-[#333] font-medium"
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-[#888]" />
        </div>
        <div className="relative my-5">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3.5 pr-12 pl-5 bg-white rounded-lg border-none outline-none text-lg text-[#333] font-medium"
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-[#888]" />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-[#042784] hover:bg-[#031e63] rounded-2xl shadow border-none cursor-pointer text-lg text-white font-semibold 
]"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
