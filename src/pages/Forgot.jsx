import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (email) {
      setIsEmailSent(true);
      setEmail("");
    }
  };

  return (
    <div>
      <div>
        {" "}
        <div className="font-bold flex justify-between px-[10%] py-4 items-center text-lg">
          <Link>
            <p className="text-4xl ">
              <span className="text-[#45AB49]">AGRI</span>sales
            </p>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-[#FF9C00] sm:text-3xl">
            Your Email
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#FF9C00] px-5 py-3 text-sm font-medium text-white"
            >
              Send
            </button>
          </form>

          {isEmailSent && (
            <div className="mt-4 p-4 text-center text-white bg-[#45AB49] rounded-lg">
              OTP sent successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgot;
