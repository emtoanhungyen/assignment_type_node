import React from 'react'
import { isAuthenticate } from '../utils/localStorage';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { Navigate } from 'react-router-dom';

type PrivteRouteProps = {
    children: JSX.Element
}

const PrivteRoute = (props: PrivteRouteProps) => {
    const { user: { role } } = isAuthenticate();
    // const role = true;
    if(!role){
        return <Navigate to="/login"/>
        // toastr.info('Bạn không có quyền truy cập.');
    }
    return props.children
}
export default PrivteRoute