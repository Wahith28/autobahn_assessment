import { Typography } from "@mui/material";
import React from "react";
import "./user.css";

const User = ({ email, name }) => {
  return (
    <tr testData="test">
      <td>
        <Typography>{name}</Typography>
      </td>
      <td>
        <Typography>{email}</Typography>
      </td>
    </tr>
  );
};

export default User;
