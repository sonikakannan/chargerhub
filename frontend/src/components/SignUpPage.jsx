import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSignupMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignUpPage = ({ isMobile, onLogin }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup({ userName, email, password }).unwrap();
      dispatch(setCredentials({ token: res.token }));
      navigate("/");
    } catch (err) {
      window?.toast?.error?.(
        err?.data?.message || "Sign up failed. Please try again."
      );
    }
  };

  return (
    <div
      className={`flex flex-col ${
        isMobile
          ? "items-center justify-between"
          : "items-center justify-center"
      } h-full`}
    >
      <form
        className={`${isMobile ? "w-full pt-9 px-8" : "w-full pt-9 px-8"}`}
        onSubmit={handleSubmit}
      >
        <h1
          className={`${
            isMobile ? "text-3xl" : "text-4xl"
          } font-bold text-center text-[#333] mb-6`}
        >
          Sign Up
        </h1>
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Username"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full py-3.5 pr-12 pl-5 bg-white rounded-lg border border-gray-300 outline-none text-lg text-[#333] font-medium"
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-[#888]" />
        </div>
        <div className="relative mb-5">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3.5 pr-12 pl-5 bg-white rounded-lg border border-gray-300 outline-none text-lg text-[#333] font-medium"
          />
          <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-[#888]" />
        </div>
        <div className="relative mb-7">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3.5 pr-12 pl-5 bg-white rounded-lg border border-gray-300 outline-none text-lg text-[#333] font-medium"
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-[#888]" />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-[#042784] hover:bg-[#031e63] rounded-2xl shadow-md border-none cursor-pointer text-lg text-white font-semibold "
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      {/* Mobile Bottom Welcome */}
      {isMobile && (
        <div className="flex flex-col rounded-t-[100px] py-6 text-white bg-[#042784] items-center w-full h-[35%]">
          <p className="text-3xl font-semibold py-2">Hello, Welcome!</p>
          <p className="mb-3 text-sm font-semibold pb-2">
            Already have an account?
          </p>
          <button
            className="text-lg font-semibold w-32 h-10 border border-white rounded-md text-white hover:bg-white hover:text-[#042784] cursor-pointer"
            onClick={onLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
