import { Routes, Route } from 'react-router-dom';
import UserService from './UserService';

const PrivateRoute = (props) =>{
    const isAth = USer

    return (
        <>
        <Route path={props.path} elements={props.children}/>
        </>
    )
}
export default PrivateRoute;