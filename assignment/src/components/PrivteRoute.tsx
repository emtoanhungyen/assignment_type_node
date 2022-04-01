import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localStorage';
import toastr from 'toastr';

type PrivteRouteProps = {
    children: JSX.Element
}

const PrivteRoute = (props: PrivteRouteProps) => {
    const { user: { role } } = isAuthenticate();
    // const role = true;
    if(!role){
        return <Navigate to="/login"/>
        
    }
    toastr.success('Ve trang dang nhap di cu')
    return props.children
}

export default PrivteRoute