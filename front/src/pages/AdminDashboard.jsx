import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        Admin Dashboard
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Manage users, managers, assignments, and view system statistics — all in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          to="/admin-dashboard/admin-stats"
          className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow hover:bg-blue-600 text-center"
        >
          View Stats
        </Link>

        <Link
          to="/admin-dashboard/get-all-users"
          className="bg-green-500 text-white px-6 py-4 rounded-lg shadow hover:bg-green-600 text-center"
        >
          Manage Users
        </Link>

        <Link
          to="/admin-dashboard/get-all-managers"
          className="bg-purple-500 text-white px-6 py-4 rounded-lg shadow hover:bg-purple-600 text-center"
        >
          Manage Managers
        </Link>

        <Link
          to="/assignment"
          className="bg-indigo-500 text-white px-6 py-4 rounded-lg shadow hover:bg-indigo-600 text-center"
        >
          Assignments
        </Link>

        <Link
          to="/contactus"
          className="bg-gray-500 text-white px-6 py-4 rounded-lg shadow hover:bg-gray-600 text-center"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
