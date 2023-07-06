import CardID from "../Cards/CardId"
import "../Cards/Home.css"
import { Link } from "react-router-dom"

export default function HomePage(){
    return(
       <div className="country"> 
        <h1 id="title2">Country</h1>
        <div>
       <CardID></CardID>
        </div>
        <Link to="/home">
    <button id="button1">volver</button>
        </Link>
        </div>
    )
}