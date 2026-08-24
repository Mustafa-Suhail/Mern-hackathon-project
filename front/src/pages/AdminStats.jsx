import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/admin/stats", {
        withCredentials: true,
      });
      setStats(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return <p className="text-center">Loading stats...</p>;
  }

  if (!stats) {
    return <p className="text-center">No stats available.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Statistics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{stats.totalUsers}</p>
        </div>

        <div className="bg-purple-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Total Managers</h3>
          <p className="text-2xl">{stats.totalManagers}</p>
        </div>

        <div className="bg-green-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Total Services</h3>
          <p className="text-2xl">{stats.totalServices}</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-2xl">${stats.totalRevenue}</p>
        </div>

        <div className="bg-red-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-2xl">{stats.activeUsers}</p>
        </div>

        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Visitors</h3>
          <p className="text-2xl">{stats.visitors || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
