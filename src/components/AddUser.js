import React from "react";
import { Button, TextField, Typography } from "@mui/material";

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
        <br />
        <div>
          <TextField
            placeholder="Name"
            name="name"
            size="small"
            type="name"
            required
          />
          <TextField
            placeholder="Email"
            name="email"
            size="small"
            type="email"
            required
          />
          <Button
            onSubmit={handleOnSubmit}
            color="info"
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </div>
        <hr style={{ margin: "20px" }} />
      </form>
    </div>
  );
};

export default AddUser;
