import { Routes, Route } from 'react-router-dom';


const PrivateRoute = (props) =>{
    return (
        <>
        <Route path={props.path} elements={props.children}/>
        </>
    )
}
export { originalName as alias } from 'module'