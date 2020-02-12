import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import { useLocalStorage } from "../hooks/useLocalStorage";
import { useForm } from "../hooks/useForm";

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

const initialValue = {
    username: '',
    email: ''
}

export default function SignupForm() {
    const classes = useStyles();
    const [{ username, email }, clearForm, handleChanges] = useForm(
            'sign up form', 
            initialValue
        );

    const handleSubmit = e => {
        e.preventDefault();
        alert(username);
    }

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
                name="username"
            />
            <TextField
                id="outlined-name"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
                name="email"
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
