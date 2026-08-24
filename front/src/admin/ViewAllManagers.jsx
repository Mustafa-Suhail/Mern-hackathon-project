import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GetAllManagers = () => {
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchManagers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/admin/all-managers",
        { withCredentials: true }
      );
      setManagers(res.data.managers);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteManager = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this manager?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/api/v1/admin/delete-manager/${id}`,
        { withCredentials: true }
      );
      setManagers((prev) => prev.filter((manager) => manager._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const viewProfile = (id) => {
    navigate(`/admin-dashboard/manager/${id}`);
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  if (loading) {
    return <p className="text-center">Loading managers...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Managers</h2>
      {managers.length === 0 ? (
        <p>No managers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-200 text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager) => (
                <tr key={manager._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{manager.name}</td>
                  <td className="p-3">{manager.email}</td>
                  <td className="p-3">{manager.role}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => viewProfile(manager._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => deleteManager(manager._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetAllManagers;
