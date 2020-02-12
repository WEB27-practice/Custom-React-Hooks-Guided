import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useLocalStorage } from "../hooks/useLocalStorage";
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
    const [username, setUsername] = useLocalStorage('username');
    const [email, setEmail] = useLocalStorage('email');

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
                onChange={e => setUsername(e.target.value)}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={e => setEmail(e.target.value)}
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
