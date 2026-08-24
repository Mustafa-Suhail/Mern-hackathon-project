import { Outlet, Link, useNavigate } from "react-router-dom";
import React , { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const getManagerProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/users/user-profile",
        {
          withCredentials: true,
        }
      );

      if (response.data.manager.role !== "admin") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`fixed md:static z-30 top-0 left-0 h-full w-64 
        bg-green-200 shadow-lg transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6 text-xl font-bold border-b border-green-300">
          Admin Panel
        </div>

        <nav className="mt-4 px-4 space-y-2">
          <Link
            to="admin-stats"
            className="block p-3 rounded hover:bg-green-300"
          >
            Dashboard
          </Link>

          <Link
            to="get-all-users"
            className="block p-3 rounded hover:bg-green-300"
          >
            View All Users
          </Link>

          <Link
            to="get-all-doctors"
            className="block p-3 rounded hover:bg-green-300"
          >
            View All Managers
          </Link>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <h1 className="font-semibold text-lg">Admin Dashboard</h1>

          <button
            onClick={() => navigate("/")}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Exit
          </button>
        </header>

        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
