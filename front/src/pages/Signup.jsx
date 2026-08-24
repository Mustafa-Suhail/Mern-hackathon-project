import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async () => {
    try {
      const formData = { name, email, password };

      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register-user",
        formData
      );

      const token = response.data.token;

      Cookies.set("token", token, {
        expires: 7,
      });

      toast.success("User registered successfully");

      navigate("/");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-700">
          Signup into your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md px-3 py-1.5 text-gray-800 border border-gray-300 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md px-3 py-1.5 text-gray-800 border border-gray-300 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-indigo-500 hover:text-indigo-400"
              >
                Forgot password?
              </a>
            </div>
            <div className="mt-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md px-3 py-1.5 text-gray-800 border border-gray-300 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={submitForm}
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Signup as User
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">Or</p>
            <Link
              to="/signup-manager"
              className="font-semibold text-indigo-500 hover:text-indigo-400"
            >
              Signup as Manager
            </Link>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-500 hover:text-indigo-400"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
