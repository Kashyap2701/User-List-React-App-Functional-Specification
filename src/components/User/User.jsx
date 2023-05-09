/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Profile from "../Profile/Profile";
import { Trash2, Lock } from "react-feather";

function User({ user }) {
  const iconStyle = {
    cursor: "pointer",
    opacity: "0.5",
  };
  const accessHandler = () => {};

  const statusHandler = () => {};

  return (
    <tr>
      <td colSpan={2}>
        <Profile
          name={user.first_name + " " + user.last_name}
          email={user.email}
          profileImg={user.avatar}
        />
      </td>
      {!user.owner ? (
        <>
          <td>
            <select
              name="status"
              defaultValue={Boolean(user.active)}
              onChange={statusHandler}
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </td>
          <td>
            <select
              name="access"
              defaultValue={user.role.toLowerCase()}
              onChange={accessHandler}
            >
              <option value="manager">Manager</option>
              <option value="read">Read</option>
            </select>
          </td>
          <td style={{ textAlign: "start" }}>
            <Trash2 style={iconStyle} />
          </td>
        </>
      ) : (
        <>
          <td>
            <span style={{ color: "green", fontWeight: "bolder" }}>Active</span>
          </td>
          <td>
            <span style={{ fontWeight: "bolder" }}>Owner</span>
          </td>
          <td>
            <Lock style={iconStyle} />
          </td>
        </>
      )}
    </tr>
  );
}

export default User;
