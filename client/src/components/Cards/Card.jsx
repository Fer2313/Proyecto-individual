import React from 'react'
import { useDispatch} from 'react-redux'
import { get_Countries,get_Country } from "../../Redux/actions/actions"
import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import "./Home.css"
import { Link } from 'react-router-dom';
export default function Card(props) { 
  const countries= useSelector((s)=>s.countries)
  const dispatch =  useDispatch();
 useEffect(() => {
    
       if(!countries.length){
       
       dispatch( get_Countries())
    
  }
}, );

  function onSearch(value){
    dispatch(get_Country(value))
     }
     
  return (

   <div  className='Cards'>
      {props.currentData.map((countries)=>(
      <Link id="Card" to="/detail"> 
         <div key={countries.id} onClick={()=>onSearch(countries.name)}  > 
          <img src={countries.image} height={200} width={320} alt="img"/>
          <h3 id='Text'>{countries.name}</h3>
          <h4 id='Text2'>{countries.continent}</h4>
        </div>
    </Link>
      ) 
      )
      }
    </div>

  )
}
