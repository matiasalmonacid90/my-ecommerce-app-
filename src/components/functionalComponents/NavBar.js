import logo from "../../img/logo.png";

const NavBar = () =>{
    return (
<div style={{width: "100%", height:"80px", backgroundColor:"blue"}}>
    <div>
    <img src={logo} height="80px"></img>
    </div>
    <div>
    <h1> Envíos Grátis a Mendoza</h1>
    </div> 
    <div>
        <ul>
            <li><a>Productos</a></li>
            <li><a>Sucursales</a></li>
            <li><a>Conctacto</a></li>
        </ul>
    </div>
</div>
    )
    
}

export default NavBar;