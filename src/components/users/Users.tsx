import React, { useCallback, useEffect, useState } from "react";
import { IUserModel } from "./Users.model";
import { GetUsers } from "./Users.service";

type IProps = {};

const UsersComponent = (props: IProps) => {
  const [users, setUsers] = useState<IUserModel[]>([]);

  const fetchUsers = useCallback(async () => {
    const users: IUserModel[] = await GetUsers();
    setUsers(users);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>Users list::</h1>
      {users.length ? (
        <ul>
          {users.map((user: IUserModel) => {
            return (
              <li
                key={user.id}
                style={{
                  padding: "2px",
                  marginBottom: "5px",
                  borderBottom: "2px solid black",
                }}
              >
                <span style={{ display: "block" }}>{user.name}</span>
                <span style={{ display: "block" }}>{user.email}</span>
                <span style={{ display: "block" }}>{user.phone}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No users exists</p>
      )}
    </div>
  );
};

export default UsersComponent;
