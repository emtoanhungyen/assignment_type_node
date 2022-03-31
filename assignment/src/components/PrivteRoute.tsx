import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localStorage';

type PrivteRouteProps = {
    children: JSX.Element
}

const PrivteRoute = (props: PrivteRouteProps) => {
    const { user: { role } } = isAuthenticate();
    // const role = true;
    if(!role){
        return <Navigate to="/" />
    }

    return props.children
}

export default PrivteRoute