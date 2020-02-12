import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '../theme/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
    }
}));

export default function SignupForm() {
    const classes = useStyles();
    const [username, setUsername] = useState('');

    useEffect(() => {

    })

    const handleChanges = e => {
        setUsername(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(username);
    };

    const clearForm = e => {
        e.preventDefault();
        setUsername('');
    };

    return (
        <div p={2} className="form">
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Add New Client</legend>
            <TextField
                id="outlined-name"
                label="Username"
                className={classes.textField}
                value={username}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
            />
            <div className="flexer">
                <Button color="red" onClick={clearForm}>
                Clear
                </Button>
                <Button color="blue" type="submit">
                Submit
                </Button>
            </div>
            </fieldset>
        </form>
        </div>
    );
}
