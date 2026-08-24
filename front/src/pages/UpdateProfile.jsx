import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getUserProfile = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/users/user-profile", {
        withCredentials: true,
      });

      console.log(response);
      setName(response.data.user.name)
      setEmail(response.data.user.email)
      
    } catch (error) {
        console.log(error);
        
    }
  };


  const updateProfile = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.put("http://localhost:3000/api/v1/users/update-profile", {name, email}, {
            withCredentials : true
        })
        toast.success("User Profile updated successfully")
        
    } catch (error) {
        toast.error("Something went wrong")
    }
  }

  useEffect(()=>{
    getUserProfile()
  },[])
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-700">
          Update Your Profile
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" className="space-y-6" onSubmit={updateProfile}>
          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-700">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-700"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                name="email"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
            
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Update Profile
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
