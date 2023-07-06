import React from 'react'
import "./Detail.css"
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
export default function Detail(){
    const countryInfo= useSelector((s)=>s.country)
  return (
    <div className='detail' >
    <h1 id="title2">Detail</h1>
    {countryInfo.name?<div className='Caja'>
      <h1 className='red'>{countryInfo.id}</h1>
      <h2>{countryInfo.name}</h2>
      <img src={countryInfo.image} alt="img"></img>
      <h3 className='red'>Continent:</h3><p>{countryInfo.continent}</p>
      <h3 className='red'>Capital:</h3><p>{countryInfo.capital}</p>
      {countryInfo.subregion?<h3 className='red'>Subregion:<p id='subregion'>{countryInfo.subregion}</p></h3>:null}
      {countryInfo?<h3 className='red'>area:<p  id='subregion'>{countryInfo.area}</p></h3>:null}
      <h3 className='red'>population:</h3><p>{countryInfo.population}</p>
     </div>:<div className='text4'>
<h1>Aqui apareceran los paises que busques</h1>
</div>}
     <Link to="/home">
    <button id="button1">Volver</button>
        </Link>
    </div>
  )
}
