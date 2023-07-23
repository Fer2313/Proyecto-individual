import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { useSelector } from "react-redux"
import { Link, useNavigate} from 'react-router-dom'

export default function Detail() {
  const countryInfo = useSelector((s) => s.country)
  const navigate = useNavigate();
  const [load, setLoad] = useState(true)
  function loading(){
    setTimeout(() => {
        setLoad(false);
    }, 2000);
  }
  useEffect(()=>{
    loading()
  },[])
  console.log(countryInfo, "hola")
  return (
    <div className='detail' >
      {!load ? <div style={{ display: "flex", justifyContent: "center" }}>
       {countryInfo.length ? <div className="containerD">
         <div className='Caja'>
            <h1 className='red'>{countryInfo[0].id}</h1>
            <h2>{countryInfo[0].name}</h2>
            <img src={countryInfo[0].image} alt="img"></img>
            <h3 className='red'>Continent:</h3><p>{countryInfo[0].continent}</p>
            <h3 className='red'>Capital:</h3><p>{countryInfo[0].capital}</p>
            {countryInfo.subregion ? <h3 className='red'>Subregion:<p id='subregion'>{countryInfo[0].subregion}</p></h3> : null}
            {countryInfo ? <h3 className='red'>area:<p id='subregion'>{countryInfo[0].area}</p></h3> : null}
            <h3 className='red'>population:</h3><p>{countryInfo[0].population}</p>
          </div> 
        {countryInfo[0].activities.length ? <div className='Caja2'>
            <h1>Activities</h1>
            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
              {countryInfo[0].activities.map((a) => (
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", backgroundColor: "rgb(255, 115, 65)", padding: "10px", borderRadius: "10px" }}>
                  <h5>{a.name}</h5>
                  <div style={{ fontSize: "17px", textAlign: "start" }}>
                    <p>dificulty: {a.dificulty}</p>
                    <p>duration: {a.duration}</p>
                    <p>season: {a.season}</p>
                  </div>
                </div>
              ))}</div>
          </div> :  null}
        </div>: navigate("/home")}
      </div> : <div className='text4'>
        <h1>Cargando...</h1>
      </div>}
      <Link to="/home">
        <button id="Boton1">Volver</button>
      </Link>
    </div>
  )
}
