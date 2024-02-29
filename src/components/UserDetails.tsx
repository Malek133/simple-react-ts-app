import { IUserData } from "./Interface"
interface IProps{
    user:IUserData;
}
const UserDetails = ({user}:IProps) => {
  return (
    <div style={{marginTop:"35px"}}>
      <h3>Email is : {user.email}</h3>
      <h3>UserName is : {user.username}</h3>
      <h3>password is : {user.password}</h3>
    </div>
  )
}

export default UserDetails
