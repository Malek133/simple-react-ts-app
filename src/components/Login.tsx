// import { useState } from "react";
import { useState } from "react"
import { formInputList } from "./Data"
import { IUserData } from "./Interface"

interface IProps{
       setIsloged:(value:boolean)=> void
       userData:IUserData
       setUserData:(user:IUserData)=> void 
      
   }

const Login = ({setIsloged,userData,setUserData}
    :IProps) => {
  const [inputArr,setInputArr]=useState(formInputList)
    // Handels
    const onChangeHandeler = 
    (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value,name} = e.target
        setUserData({
            ...userData,
            [name]: value
         })
    }

    //  InputForm render

const renderFormInputListe = inputArr.map((input,x) =>(
     <div style={{display:"flex",justifyContent:"center"
     ,alignItems:"center"}} key={x}> 
    <div style={{margin:"15px"}} >
            <div>
               <label htmlFor={input.label}>
                {input.label}: </label>
            </div>
            <input
            style={{width:"400px", marginRight:"15px"
              ,height:"35px"}}
                type={input.type}
                name={input.name}
                id={input.id}
                placeholder="Enter your email"
                 value={userData[input.name]}
                onChange={onChangeHandeler}
              />
            </div>
            <button onClick={() =>{
                const filtred=inputArr.filter(input => 
                    input.name !== formInputList[x]['name'])
                
                setInputArr(filtred)
                console.log(`remove ${x}`);
            }}
             style={{color:"red",fontSize:"26px"}}>
                ✘</button>
            </div>
             )
             )

    return (
        <div>
            {/* <h3>Email : {email}</h3> */}
          {/* {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} */}
          <form 
           onSubmit={(e) => e.preventDefault()}
          >
            {renderFormInputListe}
            {/* <div style={{margin:"15px"}}>
             <div>
                <label htmlFor="username">Username: </label>
                </div> 
              <input
              style={{width:"400px", marginRight:"15px",height:"35px"}}
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                 value={userData.username}
                onChange={onChangeHandeler}
              />
            </div>

            <div style={{margin:"15px"}}>
             <div>
                <label htmlFor="email">Email: </label>
             </div>
              <input
              style={{width:"400px", marginRight:"15px",height:"35px"}}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                 value={userData.email}
                onChange={onChangeHandeler}
              />
            </div>

            <div style={{margin:"15px"}}>
              <div>
                <label htmlFor="password">
                passeWord: </label>
                </div>  
              <input
               style={{width:"400px", marginRight:"15px",height:"35px"}}
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
               value={userData.password}
                onChange={onChangeHandeler}
                   
              />
            </div> */}

            <button style={{color:"white",
            backgroundColor:"black",
            border:"1px solid white"}}
            onClick={() => setIsloged(true)} 
            type="submit">Se connecter</button>
          </form>
        </div>
      );
}

export default Login
