import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ManagerAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", dueDate: "" });

  const fetchAssignments = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/manager/assignments", { withCredentials: true });
      setAssignments(res.data.assignments);
    } catch (err) {
      toast.error("Error fetching assignments");
    }
  };

  const createAssignment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/v1/manager/assignments", formData, { withCredentials: true });
      setAssignments([...assignments, res.data.assignment]);
      toast.success("Assignment created");
      setFormData({ title: "", description: "", dueDate: "" });
    } catch (err) {
      toast.error("Error creating assignment");
    }
  };

  const deleteAssignment = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/manager/assignments/${id}`, { withCredentials: true });
      setAssignments(assignments.filter((a) => a._id !== id));
      toast.success("Assignment deleted");
    } catch (err) {
      toast.error("Error deleting assignment");
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Assignments</h2>
      <form onSubmit={createAssignment} className="space-y-4 mb-6">
        <input type="text" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" required />
        <textarea name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description" required />
        <input type="date" name="dueDate" value={formData.dueDate} onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })} required />
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">Create Assignment</button>
      </form>

      <ul>
        {assignments.map((a) => (
          <li key={a._id} className="flex justify-between items-center border p-2 mb-2">
            <span>{a.title} - {new Date(a.dueDate).toLocaleDateString()}</span>
            <button onClick={() => deleteAssignment(a._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerAssignment;
