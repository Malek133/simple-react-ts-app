
import './App.css'
import Heading from './components/Heading';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { useState } from "react";
import UserDetails from './components/UserDetails';
function App() {
 
const company="alphadev"
const addcompany='city center';
const financecompany=77744;
const chifrecompany="chiffre-financial";

 const [islogin,setIsLogin]=useState(false)

 const [userData,setUserData] = useState({
  email:'',
  username:'',
  password:''
})
  return (
  
    <>
        <Navbar companyName= {company} 
    companyAddres= {addcompany}  
    companyF={financecompany} 
    companyC={chifrecompany} isLoged={islogin} 
    setIsloged={setIsLogin}  />

    <Heading titel='alphazro'>
      <span>
      ❤
      </span>
    </Heading>
    {islogin ? (<UserDetails user={userData} />)
    :<Login setIsloged={setIsLogin} 
    userData= {userData} setUserData={setUserData}/>}
    

    </>
  )
}

export default App
