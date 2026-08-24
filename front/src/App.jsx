import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupManager from "./pages/SignUpManager";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UpdateProfile from "./pages/UpdateProfile";
import UpdatePassword from "./pages/UpdatePassword";
import AdminDashboard from "./admin/AdminDashboard";
import ViewAllUsers from "./admin/ViewAllUsers";
import AdminStats from "./admin/AdminStats";
import Contact from "./pages/ContactUs";
import Manager from "./managers/ManagerAssigment";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-manager" element={<SignupManager />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/update-password" element={<UpdatePassword />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<AdminStats />} />
            <Route path="admin-stats" element={<AdminStats />} />
            <Route path="get-all-users" element={<ViewAllUsers />} />
            <Route path="get-all-managers" element={<Manager />} />
            <Route path="manager/:id" element={<Manager />} />
          </Route>


          <Route path="/contactus" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
