import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const UpdatePassword = () => {
    const [ oldPassword, setOldPassword ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const submitForm = async (e) => {
        e.preventDefault()
        try {
           const response =  await axios.put("http://localhost:3000/api/v1/users/update-password", { oldPassword, newPassword, confirmNewPassword }, {
            withCredentials : true
           })
           toast.success("password updated successfully")
        } catch (error) {
            toast.error(respose.error.data.message)
        }
    }
  return (
     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-700">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" onSubmit={submitForm} className="space-y-6">
          <div>
            <label
              htmlFor ="password"
              className="block text-sm/6 font-medium text-gray-700"
            >
              Old Password
            </label>
            <div className="mt-2">
              <input
              value = {oldPassword}
              onChange = {(e) => setOldPassword(e.target.value)}
                id="password"
                type="password"
                name="password"
                required
                autoComplete="password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-700"
            >
             New Password
            </label>
            <div className="mt-2">
              <input
              value = {newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
                id="password"
                type="password"
                name="password"
                required
                autoComplete="password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-700"
              >
                Confirm New Password
              </label>
            </div>
            <div className="mt-2">
              <input
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
                id="password"
                type="password"
                name="password"
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
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdatePassword
