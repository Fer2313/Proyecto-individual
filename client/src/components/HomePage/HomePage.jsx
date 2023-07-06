import Card from "../Cards/Card"
import "../Cards/Home.css"
import "../NavBar.css"
import { useDispatch } from "react-redux"
import { useState,useEffect } from "react"
import axios from "axios"
import { get_Continent,get_Act_Country,get_Order_A_Z ,get_Order_Z_A,population_A,population_D,reset} from "../../Redux/actions/actions"
const URL= "http://localhost:3001/activities"
export default function HomePage(props){
  const countries=[...props.countries]
   const [page,setPage]=useState({ currentPage:1, pageSize:9 }) 
  
   const botones= Math.round((props.countries.length/9))
   var arr=[]
  for (let index = 1; index <= botones; index++) {
   arr.push(index)
  }
    console.log(arr)
    console.log(botones)
    const startIndex = (page.currentPage - 1) * page.pageSize;
    const endIndex = startIndex + page.pageSize;
  
    const currentData = countries?countries.slice(startIndex, endIndex):null
  const handlePrevious=()=>{
    setPage({...page, currentPage:page.currentPage-1});
  }
   const handleNext = () => {
    setPage({...page, currentPage:page.currentPage+1 });
  }
function handleButton(n){
    
    setPage({...page, currentPage:n.target.value});
 }
    const [activities,setActivities]= useState()
    useEffect(() => {
 
       axios.get(URL).then((data)=>{
          setActivities(data.data)
        })
    
       
 }, []);
    const dispatch = useDispatch()
    function handleReset(){
        dispatch(reset())
      }
      function handleValue(e){
       const {value,name} = e.target
       if(name==="Filter1"){
           dispatch(get_Continent(value))
       }
       if(name==="Filter2"){
           dispatch(get_Act_Country(value))
       }
       if(name==="Filter3"){
           if(value==="A-Z"){
           dispatch(get_Order_A_Z(value))
       }
       if(value==="Z-A"){
           dispatch(get_Order_Z_A(value))
       }
       if(value==="Population(+)"){
           dispatch(population_A(value))
       }
       if(value==="Population(-)"){
           dispatch(population_D(value))
       }
       }
      }
    return(
       <div className="Home"> 
        <h1 id="title">Countries</h1>
        <div className="HP">
    <div className="Orderbar">
    <div className="Filtrado">
            <select id="Order" name='Filter3' defaultValue="DEFAULT" onChange={handleValue}>
           <option value="DEFAULT" disabled>Select Order</option>
           <option value="A-Z">A-Z</option>
           <option value="Z-A">Z-A</option>
           <option value="Population(+)">Population(+)</option>
           <option value="Population(-)">Population(-)</option>
           </select>
            <select id="Filter" name='Filter1' defaultValue="DEFAULT" onChange={handleValue}>
            <option value="DEFAULT" disabled>Select Continent</option>
            <option value="Antarctica">Antarctica</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            </select>
            <select id="Filter2" name='Filter2' defaultValue="DEFAULT" onChange={handleValue}>
            <option value="DEFAULT" disabled>Select Activity</option>
             {activities?activities.map((a)=>(
            <option value={a.name}>{a.name}</option>
             )):null}
            </select>
            <button onClick={handleReset} id="reset">Reset</button> 
        </div>
        
        </div><Card currentData={currentData}></Card>
      
        </div>
        <div>
            {page.currentPage!==1?<button id="Previous" onClick={handlePrevious}>Previous</button>:null}
            {arr.map((n)=>(
                <button value={n} id="Buttons" onClick={handleButton}>{n}</button>
            ))}
            {page.currentPage<28?<button id="Next" onClick={handleNext}>Next</button>:null}
        </div>
        </div>
    )
}