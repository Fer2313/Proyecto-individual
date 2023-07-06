import React from 'react'
import {  useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import "../Cards/Home.css"
export default function CardId() {
 
const country= useSelector((state) => state.country)
return (
<div  className='Cards'>
{country.name?
<div className='Card'>
<h3 className='t1'>{country.name}</h3>
<img src={country.image} alt="img"/>
<h5 className='t1'>{country.continent}</h5>
<Link to="/detail">
<h4 className='subtitle'>Detail</h4>
</Link>
</div>:
<div className='text'>
<h1>Aqui apareceran los paises que busques</h1>
</div>
}
</div>
  )
}
