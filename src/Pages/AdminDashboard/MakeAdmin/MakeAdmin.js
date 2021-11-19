import { TextField } from '@material-ui/core';
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSeuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        // axios.put(`http://localhost:5000/users/admin`, user).then(res => console.log(res.data));
        fetch(`http://localhost:5000/users/admin`, {
            method: "PUT",
            headers: {
                'authorization' : `Bearer  ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                setSeuccess(true)
                console.log(data);
            }
    })
        e.preventDefault();
    }
    return (
      <div>
        <Typography
          style={{ textAlign: "center" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Make Admin
        </Typography>
        <form
          style={{
            margin: "auto",
            marginTop: "20px",
            boxShadow: "2px 4px 5px lightgrey",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
            height: "300px",
          }}
          onSubmit={handleAdminSubmit}
        >
          <TextField
            style={{ width: "50%", marginBottom: "15px", marginTop: "50px" }}
            label="Eamil"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <Button style={{ width: "50%" }} type="submit" variant="contained">
            Make Admin
          </Button>
          {success && <Alert style={{ width: "50%" }} severity="success">Make Admin SuccessFully</Alert>}
        </form>
      </div>
    );
};

export default MakeAdmin;