

interface IProps{
 companyName:string,
    companyF:number,
    companyAddres:string,
    companyC:string,
    isLoged:boolean,
    setIsloged:(value:boolean)=>void
}

 const Navbar =({companyName,companyAddres,companyF,
  companyC,isLoged,setIsloged}: IProps ) => {

    const styles = {
        listes:{textDecoration:"none"},
        colors:{
            color: "white",
        },
       
    }
  return (
    <nav>

        <ul style={{ 
            listStyle:"none",
            display:"flex",
            border:"1px solid black",
            alignItems:"center",
            justifyContent: "space-around",
            backgroundColor:"#bf4080",
            padding:"1rem",
            borderRadius:"20px"
        }}  >

            <li><a href="/" 
            style={{...styles.listes, ...styles.colors
            ,fontSize:"34px"}}
            >{companyName}</a></li>
            <li><a href="/" 
            style={{...styles.listes, ...styles.colors}}>
             {companyF}</a></li>
            <li><a href="/" 
            style={{...styles.listes, ...styles.colors}}>
             {companyC}</a></li>
            <li><a href="/" 
            style={{...styles.listes,color:"white"}}>
            {companyAddres}</a></li>

            <li><button onClick={() => 
            setIsloged(!isLoged)}
            style={{...styles.listes,
            color:"white",backgroundColor:"black",
            border:"1px solid white"}}>
            {isLoged ? "logout":"login"} 
            </button></li>

        </ul>
    </nav>
  )
}

export default Navbar