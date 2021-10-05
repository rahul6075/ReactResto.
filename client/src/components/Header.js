// import {useState} from "react";
import {Link} from "react-router-dom"
function Header() {
    //  const [open, setOpen] = useState(false);
     
    //  const showMenu = () => {
    //         if(!open){
    //             setOpen(true);
    //         }
    //     }
     
    return (
        <header>

            <Link href="#" className="logo"><i className="fas fa-utensils"></i>resto.</Link>

            <nav className="navbar">
                <Link className="active" href="#home">home</Link>
                <Link href="#/">dishes</Link>
                <Link href="#/">about</Link>
                <Link href="#/">menu</Link>
                <Link href="#/">review</Link>
                <Link href="#/">order</Link>
            </nav>

            <div className="icons">
                <i className= ".active fas fa-bars"  id="menu-bars"></i>
                <i className="fas fa-search" id="search-icon"></i>
                <Link href="#/" className="fas fa-heart"></Link>
                <Link href="#/" className="fas fa-shopping-cart"></Link>
            </div>

        </header>
    )
}

export default Header
