import { Routes, Route } from 'react-router-dom';
import UserService from './UserService';

const PrivateRoute = (props) =>{
    const is

    return (
        <>
        <Route path={props.path} elements={props.children}/>
        </>
    )
}
export default PrivateRoute;