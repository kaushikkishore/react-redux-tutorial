import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../redux/";

const UserContainer = () => {
  const { usersList } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log("users data");
  return (
    <div>
      <h3>User container</h3>
      <div>
        {usersList.map((item, index) => {
          return (
            <div key={index}>
              {item.name} - {item.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserContainer;
