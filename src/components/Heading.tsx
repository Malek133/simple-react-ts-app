import { ReactNode } from "react";
interface IProps{
   titel:string;
   children:ReactNode
}
const Heading = ({titel,children}:IProps ) => {
  return (
    <div>
      <h1> {children} {titel}</h1>
    </div>
  )
}

export default Heading
