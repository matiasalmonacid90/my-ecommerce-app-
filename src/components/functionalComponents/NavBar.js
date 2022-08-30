import logo from "../../img/logo.png";
import style from "./style.css";
import CartWidgest from "./CartWidgest";


const NavBar = () =>{
    return (
<div className= "NavBar-container">
    <div>
    <img src={logo} height="80px"></img>
    </div>
    <CartWidgest/>
    <div>
    <h1> Envíos Grátis a Mendoza</h1>
    </div> 
    <div>
        <ul>    
           <li>Productos</li>
           <li>Conctacto</li>
           <li>Nosotros</li>
        </ul>
    </div>
</div>
    )
    
}

export default NavBar;

