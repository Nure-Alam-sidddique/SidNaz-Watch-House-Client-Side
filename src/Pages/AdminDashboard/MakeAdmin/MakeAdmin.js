import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Alert from "@mui/material/Alert";
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
            <h1>Make Admin</h1>
            <form sx={{width: "50%"}} onSubmit={handleAdminSubmit}>
                <TextField
                    label="Eamil"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin SuccessFully</Alert>}
        </div>
    );
};

export default MakeAdmin;