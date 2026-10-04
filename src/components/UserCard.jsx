import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersFailure, getAllUsersSuccess, getAllUserStart } from "../features/users/users.js";
import axios from "axios";

const UserCard = ({ user }) => {


  let users = useSelector((state) => state.user)
  // console.log(users);


  const dispatch = useDispatch()

  const getUserData = async () => {
    dispatch(getAllUserStart())
    try {
      const response = await axios.get('https://auth-be-five.vercel.app/api/user')

      // console.log(response.data.data);

      dispatch(getAllUsersSuccess(response.data.data))
    } catch (error) {
      dispatch(getAllUsersFailure(error.message))
    }

  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="min-h-screenx flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-950 px-6 py-8 text-center">

          {/* Profile Circle */}
          <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-blue-950">
              {user.userName.charAt(0).toUpperCase()}
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-white">
            {user.userName}
          </h2>

          <p className="text-blue-200 text-sm mt-1">
            User Profile
          </p>

        </div>

        {/* User Details */}
        <div className="p-6">

          <div className="space-y-4">

            {/* Email */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-sm font-medium text-slate-500">
                Email
              </span>

              <span className="text-sm font-semibold text-slate-800">
                {user.email}
              </span>
            </div>

            {/* Username */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-sm font-medium text-slate-500">
                Username
              </span>

              <span className="text-sm font-semibold text-slate-800">
                @{user.userName}
              </span>
            </div>

            {/* Age */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-sm font-medium text-slate-500">
                Age
              </span>

              <span className="text-sm font-semibold text-slate-800">
                {user.age} years
              </span>
            </div>

            {/* Verification */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">
                Account Status
              </span>

              {user.isVerified ? (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  Verified
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                  Not Verified
                </span>
              )}
            </div>

          </div>

          {/* User ID */}
          <div className="mt-6 p-3 rounded-lg bg-slate-50">
            <p className="text-xs text-slate-400">
              User ID
            </p>

            <p className="text-xs font-medium text-slate-600 break-all mt-1">
              {user.id}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default UserCard;