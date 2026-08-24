import React , { useEffect, useState } from "react";
import axios from "axios";

const AdminStats = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalManagers: 0,
    totalRevenue: 0,
    activeUsers: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/admin",
        { withCredentials: true }
      );
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
    return <p className="text-center">Loading dashboard...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Statistics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-blue-500">
            {stats.totalUsers}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total Managers</h3>
          <p className="text-3xl font-bold text-green-500">
            {stats.totalManagers}
          </p>
        </div>
        
        <div className="bg-white p-5 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Website Visitors</h3>
          <p className="text-3xl font-bold text-orange-500">
            {stats.visitors}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Users with Services</h3>
          <p className="text-3xl font-bold text-indigo-500">
            {stats.activeUsers}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-3xl font-bold text-red-500">
            ${stats.totalRevenue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
