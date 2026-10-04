import React, { useEffect } from "react";
import UserCard from "./components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersFailure, getAllUsersSuccess, getAllUserStart, getAllUserThunk } from "./features/users/users";

const App = () => {
  let {users, loading, error} = useSelector((state) => state.user);
  console.log(users);
  
const dispatch = useDispatch()

  const getUsersData = async () => {
    dispatch(getAllUserThunk())
  }


  useEffect(() => {
    getUsersData()
  }, [])

  return (
    <div className="bg-[#2a2a2a] h-full">
      <h1 className="text-white font-bold text-4xl  underline text-center pt-4">All Users</h1>

      <div className="flex flex-wrap justify-around">
        {users && users.length > 0 ? users.map((u, idx) => <UserCard key={idx} user={u} />) : <p>user no found</p> }

      </div>
    </div>
  );
};

export default App;