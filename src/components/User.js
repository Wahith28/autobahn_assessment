import { Typography } from "@mui/material";
import React from "react";
import "./user.css";

const User = ({ id, email, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr testData="test">
      <td>
        <Typography>{name}</Typography>
      </td>
      <td>
        <Typography>{email}</Typography>
      </td>
      {/* <td>
                <button style={{margin:"5px"}}>edit</button>
                <button style={{margin:"5px"}} onClick={handleDelete}>delete</button>
            </td> */}
    </tr>
  );
};

export default User;
