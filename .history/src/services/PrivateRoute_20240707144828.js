import { Routes, Route } from 'react-router-dom';
import 

const PrivateRoute = (props) =>{


    return (
        <>
        <Route path={props.path} elements={props.children}/>
        </>
    )
}
export default PrivateRoute;