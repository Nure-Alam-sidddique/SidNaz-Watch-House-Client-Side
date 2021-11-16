import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email}
        // axios.put(`http://localhost:5000/users/admin`, user).then(res => console.log(res.data));
        fetch(`http://localhost:5000/users/admin`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => console.log(data));
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Eamil"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;