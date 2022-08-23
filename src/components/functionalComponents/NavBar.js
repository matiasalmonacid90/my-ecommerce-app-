import logo from "../../img/logo.png";
import style from "./style.css"


const NavBar = () =>{
    return (
<div className= "NavBar-container">
    <div>
    <img src={logo} height="80px"></img>
    </div>
    <div>
    <h1> Envíos Grátis a Mendoza</h1>
    </div> 
    <div>
        <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Conctacto</a></li>
        </ul>
    </div>
</div>
    )
    
}

export default NavBar;