import React, { useState } from "react";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center md:pt-20 min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] md:px-3">
      <div className="relative my-4 rounded-4xl w-full max-w-[550px] min-h-full md:max-w-[850px] md:h-[550px] lg:h-[500px] bg-white  md:rounded-4xl shadow-xl overflow-hidden flex justify-center items-center">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-full relative">
          <div
            className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out z-20 ${
              isSignUp
                ? "translate-x-full opacity-0 z-10"
                : "translate-x-0 opacity-100 z-20"
            }`}
          >
            <LoginPage isMobile={false} onSignUp={() => setIsSignUp(true)} />
          </div>
          <div
            className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out z-10 ${
              isSignUp
                ? "translate-x-full opacity-100 z-20"
                : "translate-x-0 opacity-0 z-10"
            }`}
          >
            <SignUpPage isMobile={false} onLogin={() => setIsSignUp(false)} />
          </div>

          {/* Desktop Overlay */}
          <div
            className={`absolute right-0 top-0 w-1/2 bg-[#042784] h-full transition-all duration-700 ease-in-out z-40 flex flex-col items-center justify-center text-white p-10
              ${
                isSignUp
                  ? " -translate-x-full  rounded-r-[150px]"
                  : " translate-x-0 rounded-l-[150px]"
              }
            `}
          >
            <h2 className="text-3xl font-bold mb-4">
              {isSignUp ? "Welcome Back!" : "Hello, Welcome!"}
            </h2>
            <p className="mb-5 text-sm font-semibold">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </p>
            <button
              className="text-lg font-semibold w-40 h-11 bg-transparent border border-white rounded-md cursor-pointer"
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col w-full h-full md:hidden relative">
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out z-20 bg-white ${
              isSignUp
                ? "-translate-y-full opacity-0 pointer-events-none"
                : "translate-y-0 opacity-100"
            }`}
          >
            <LoginPage isMobile={true} onSignUp={() => setIsSignUp(true)} />
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out z-30 bg-white ${
              isSignUp
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <SignUpPage isMobile={true} onLogin={() => setIsSignUp(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
