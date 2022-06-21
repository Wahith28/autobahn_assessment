import { Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Typography variant="h5">Add User</Typography>
        <TextField placeholder="Name" name="name" size="small" />
        <TextField placeholder="Email" name="email" size="small" />
        <Button onSubmit={handleOnSubmit} type="submit">
          Add
        </Button>
        <hr style={{ margin: "10px" }} />
      </form>
    </div>
  );
};

export default AddUser;
