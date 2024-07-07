import { Routes, Route } from 'react-router-dom';
import UserService from '

const PrivateRoute = (props) =>{


    return (
        <>
        <Route path={props.path} elements={props.children}/>
        </>
    )
}
export default PrivateRoute;