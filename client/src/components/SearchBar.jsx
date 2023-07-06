import { useState,useEffect } from "react"
import "./NavBar.css"
import icono from "../Imagenes/png-transparent-computer-icons-m.png"
import { useDispatch } from "react-redux"
import { get_Country} from "../Redux/actions/actions"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function SearchBar(){
   const location =useLocation()
   const dispatch = useDispatch()
  
       function onSearch(value){
      dispatch(get_Country(value))
       }
    const [countries,setCountries]= useState("")
    function searchCountries(e){
         setCountries(e.target.value)
    }
    function setImput(e){
        setCountries("")
    }
    return(
    <div className={location.pathname==="/home"?"navBar":"navBar2"}>
        
        <div className="nav">
        <input className="input" onChange={(e)=>searchCountries(e)} value={countries} type='text' name="search" placeholder="Write the name of a country"></input>
        <Link to="/country">
        <button className="button" onClickCapture={()=>onSearch(countries)} onClick={(e)=>setImput(e)}><img src={icono} alt="icono"/></button>
        </Link>
        </div>
   <div className="Buttons">
    <Link to="/form"><button id="Button1" >NewActivity</button></Link>
    
    <Link to="/"><button id="Button2">Exit</button>
    </Link>

    
    </div>
    
       
        
       
    </div>
    )
}