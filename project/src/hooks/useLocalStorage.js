import { useState } from "react";

export const useLocalStorage = (key, initialState = '') => {
    // set up state property
    // capture the values of the input
    // if local data does not have that, else use initial data
    
    const [storedValue, setStoredValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialState));
            return initialState;
        }
    });

    // update localStorage when needed

    // don't forget to parse data from localStorage, and stringify new data getting stored

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));

    };

    return [storedValue, setValue];

};

