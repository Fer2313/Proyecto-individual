import "./LandingPage.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
export default function LandingPage(){
const [mouse,setMouse]=useState(true)
function handlerMouse(){
    setMouse(!mouse)
}

useEffect(() => { 
    
 axios.get("http://localhost:3001")
  }, []);

return(
    
    <div className="Conteiner">
    <div className="caja">
    <h1 id="text">
        Welcome to App!!
    </h1>
    <Link to="/home"><button id={mouse?"button":"button2"} onMouseEnter={handlerMouse} onMouseLeave={handlerMouse}>Home</button></Link>
    </div>
    </div>
)
}