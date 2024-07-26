import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import image4 from '../../public/image5.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/api/agri-sales/users/signIn', { email, password })
      .then((response) => {
        const { token, user:{role} } = response.data;
        localStorage.setItem('token', token);
        console.log(role);
        if (role === 'farmer') {
          navigate('/admin');
        } else if (role === 'buyer') {
          navigate('/home');
        } else {
          alert('Unknown role. Please contact support.');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Invalid credentials. Please try again.');
      });
  };

  return (
    <div
      className="bg-cover bg-center h-screen p-64"
      style={{ backgroundImage: `url(${image4})` }}
    >
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl animate-bounce duration-200">
          Get started today!
        </h1>
      </div>

      <form onSubmit={handleLogin} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-white">
            No account?
           <Link className="underline" href="/signup">
              Sign up
           </Link>
          </p>
          <p className="text-sm text-white">
           <Link className="underline" href="/forgot">
              Forgot your password?
           </Link>
          </p>
          <button
            type="submit"
            className="inline-block rounded-lg bg-[#FF9C00] px-5 py-3 text-sm font-medium text-white"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
