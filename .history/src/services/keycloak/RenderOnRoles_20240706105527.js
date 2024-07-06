import UserService from '../UserService'

export default function RenderOnRoles({roles, children}){
    if(!UserService.hasRole(roles))
}