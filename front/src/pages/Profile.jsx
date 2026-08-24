import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie"

const Profile = () => {
  const token = Cookies.get("token");

  useEffect(()=>{
    if(!token){
      naviagte("/login")
    }
  })
  const [user, setUser] = useState();
  const naviagte = useNavigate()
  const getUserProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/users/user-profile",
        {
          withCredentials: true,
        },
      );
      setUser(response.data.user);
      console.log(response.data.user.role);
      
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/api/v1/users/delete-profile", {
          withCredentials : true
        }
      );
      toast.success("Profile deleted successfully");
      naviagte("/")
    } catch (error) {
      toast.error(response.data.error.message);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Product Images */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={user?.avatar.url}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300 rounded-4xl"
            />
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{user?.name}</h2>

          <p className="text-gray-600">{user?.email}</p>

          <Link to="/update-profile">
            <button className="mt-4 w-fit px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Update Profile
            </button>
          </Link>
          <Link to="/update-password">
            <button className="mt-4 w-fit px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Update Password
            </button>
          </Link>
          <button
            onClick={deleteProfile}
            className="mt-4 w-fit px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
