import "./LandingPage.css"
import { Link } from "react-router-dom"
export default function LandingPage(){

return(
    
    <div className="Conteiner">
    <div className="caja">
    <h1 id="text">
        Welcome to App!!
    </h1>
    <div className="flex items-center justify-center">
        <Link to="/home">
            <button className="mi-boton">Ingresar</button>
            </Link></div>
    
    </div>
    </div>
)
}