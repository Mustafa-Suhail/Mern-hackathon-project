// pages/ForgotPassword.jsx
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/forgot-password",
        { email }
      );
      console.log(response);
      toast.success("Password reset email sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-12 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="CarePlus Hospital"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-700">
          Forgot Password?
        </h2>
        <p className="mt-2 text-gray-600">
          Enter your registered email to recover your password.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4" onSubmit={submitForm}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-500 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;