import React from 'react';
import { useSelector } from 'react-redux'
import { selectIsLoggeIn } from '../../redux/slice/authSlice';


const ShowOnLogin = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggeIn)
    if (isLoggedIn) {
        return children
    }
    return null;
};

export const ShowOnLogout = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggeIn);
    if (!isLoggedIn) {
        return children;
    }
    return null;
};

export default ShowOnLogin;