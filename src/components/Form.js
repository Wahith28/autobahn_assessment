import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./user.css";

const Form = ({ id, email, name, onDelete, onEdit, data }) => {
  // const data = useSelector((state) => state);
  const [edit, setEdit] = useState(false);
  const [inp, setinp] = useState(data);
  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = (e) => {
    setEdit(!edit);
    // onEdit(inp, id);
  };

  const handleSave = (id) => {
    setEdit(!edit);
    onEdit(inp, id);
  };

  const handleInput = (e, id) => {
    let newarr = data;
    newarr[id - 1][e.target.name] = e.target.value;
    setinp(newarr);
    // onEdit(e.target.name,e.target.email,id);
    // e.target.name.value = "";
    // e.target.email.value = "";
  };

  return (
    <tr>
      {edit === true ? (
        <>
          <td>
            <TextField
              placeholder="Enter your Name"
              defaultValue={name}
              name="name"
              onChange={(e) => handleInput(e, id)}
              size="small"
            />
          </td>
          <td>
            <TextField
              placeholder="Enter your email"
              defaultValue={email}
              name="email"
              onChange={(e) => handleInput(e, id)}
              size="small"
            />
          </td>
          <td>
            <Button
              style={{ margin: "5px" }}
              variant="contained"
              color="success"
              onClick={() => handleSave(id)}
            >
              save
            </Button>
            <Button
              style={{ margin: "5px" }}
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              delete
            </Button>
          </td>
        </>
      ) : (
        <>
          <td>
            <Typography>{name}</Typography>
          </td>
          <td>
            <Typography>{email}</Typography>
          </td>
          <td>
            <Button
              style={{ margin: "5px" }}
              variant="contained"
              color="info"
              onClick={handleEdit}
            >
              edit
            </Button>
            <Button
              style={{ margin: "5px" }}
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              delete
            </Button>
          </td>
        </>
      )}
      {/* <td>{name}</td>
      <td>{email}</td>
      <td>
        <button style={{ margin: "5px" }}>edit</button>
        <button style={{ margin: "5px" }} onClick={handleDelete}>
          delete
        </button>
      </td> */}
    </tr>
  );
};

export default Form;
