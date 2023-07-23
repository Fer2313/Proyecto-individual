import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { get_Continent ,reset} from '../../Redux/actions/actions'
import {Validations,NoRepeat} from './validations'
import {Link} from "react-router-dom"
import "./FormPage.css"
import axios from "axios"
const URL= "https://countrieswww.fly.dev/activities"
export default function FormPage() {
 
    const dispatch= useDispatch()
   let [dificulty,setDificulty] =useState(undefined)
    let [duration, setDuration] = useState("");
    let [nombre, setNombre] = useState("");
   let [season,setSeason]=useState(undefined)
    const [country,setCountry]=useState([])
    const [errors, setErrors]=useState({arr:"",nombre:"",duration:"",dificulty:"",season:""})
    const [defaultt,setDefault]=useState(false)
    const countries= useSelector((s)=> s.countries)
    function handleChange(e){
      let array= [...country]
     const {value,name}=e.target    
       if(name==="nombre"){
        
        setNombre(nombre=value)
      
      }
      else if(name==="dificulty"){
        setDificulty(dificulty=value)
       
      }
     else if(name==="duration"){
        setDuration(duration=value)
      
      }
     else if(name==="season"){
        setSeason(season=value)
        
      }
    
       setErrors(Validations({nombre,dificulty,duration,season,array}));
       
    }
    function handleValue(e){
        const {value,name} = e.target
        if(name==="Filter1"){
            dispatch(get_Continent(value))
            
        }
        if(value!=="DEFAULT"){
            setDefault(true)
           
        }
    }
 const handleSummit=(e)=>{ 
  const arr=[...country]
      
        e.preventDefault();     
        if(!arr.length||nombre===""||duration===""||dificulty===undefined||season===undefined){
          return window.alert("Faltan Datos")
        }else{
             const data={countryId:arr,name:nombre,duration,dificulty,season}     
          axios.post(URL, data, {
                headers: {'Content-Type': 'application/json'}
              }).then(response => {
                window.alert("Actividades subidas");            
              })
              .catch(error => {
                console.error(error);
              });
            
        }
       
          setDuration("")
          setNombre("")        
          setCountry([])

        
    }
   function handleHome(){
    setTimeout(() => {
      window.location.reload();
    }, 100);
   } 
   function handleClick(e){ 
    const value=e.target.value
    if(country.includes(value)){
  const countrys= country.filter((c)=>c!==value)
setCountry(countrys)
    }else{

        setCountry([...country,e.target.value])
    }
   
    }
  return (
    <div className='form'>Create Activity
   <form className='formulario'>
   <br></br>
<label>Name</label>
<br></br>
{errors.nombre?<p id='warning'>{errors.nombre}</p>:null}
<input name='nombre' type="text" placeholder='Write name of activity' value={nombre} onChange={handleChange}/>
<br></br>
<label>Dificulty</label>
{errors.dificulty?<p id='warning'>{errors.dificulty}</p>:null}
<div id='dificulty'>
<p>1<input type="radio" name="dificulty" value={1} onClick={handleChange}></input></p>
<p>2<input type="radio" name="dificulty" value={2} onClick={handleChange}></input></p>
<p>3<input type="radio" name="dificulty" value={3} onClick={handleChange}></input></p>
<p>4<input type="radio" name="dificulty" value={4} onClick={handleChange}></input></p>
<p>5<input type="radio" name="dificulty" value={5} onClick={handleChange}></input></p>
</div>
<br></br>
<label>Duration </label><p id='text1'>*Hour:Min:Sec*</p>
{errors.duration?<p id='warning'>{errors.duration}</p>:null}
<input name="duration" type="text" placeholder="ej: 01:20:00" value={duration} onChange={handleChange}/>
<br></br>
<label>Season</label>
{errors.season?<p id='warning'>{errors.season}</p>:null}
<select name='season' defaultValue="DEFAULT" onChange={handleChange}>
<option value="DEFAULT" disabled>Select Season</option>
<option value="Verano">Summer</option>
<option value="Otoño">Autumn</option>
<option value="Invierno">Winter</option>
<option value="Primavera">Spring</option>
</select>
<br></br>
<label>Select Continent</label>
{errors.arr?<p id='warning'>{errors.arr}</p>:null}
<div id='country'>
{country.length?country.map((c)=>(
<p name="country" id="p">{c},</p>
)):null}
</div>
<br></br>
<div></div>
<select name='Filter1' defaultValue="DEFAULT" onChange={handleValue}>
            <option value="DEFAULT" disabled>Select Continent</option>
            <option value="Antarctica">Antarctica</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            </select>
            <br></br>
            <label>Select Countries</label>
            <br></br>
<div id='paises'>
{defaultt?countries.map((c)=> {
    return(
    <div>
       <p>{c.name}<input type="checkbox" value={c.id} name={"country"} onClickCapture={handleClick} onClick={handleChange}></input></p>
       <br></br>
       </div>
    )}):null} 
    
</div>
 <button id='Submit' onClick={handleSummit}>Submit</button>
   </form>
   <Link to="/home">
    <button id='Button' onClick={handleHome}>Volver</button>
    </Link>
    </div>
  )
}
