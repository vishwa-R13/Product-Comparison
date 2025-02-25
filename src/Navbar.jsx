import { Link } from "react-router-dom"
import './Css/Navbar.css'
const Navbar=()=>{
    return(
        <header>
            <nav>
            <Link to="/" className="a"> Home</Link>
            <Link to="/product" className="a"> Product</Link>
            <Link to="/comparison" className="a"> Comparison</Link>
            <Link to="/decision" className="a"> Decision</Link>
            </nav>
        </header>
    )
}
export default Navbar;