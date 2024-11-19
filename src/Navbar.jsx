import { Link } from "react-router-dom";
import './Navbar.css'
export const Navbar =()=> {
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/App">
                        <div className="cont-logo">
                            <span class="material-symbols-outlined">
                                diamond
                            </span>
                        </div>
                        <div className="cont-logo-name">
                            Noamane Elhansali
                        </div>
                    </Link>
                </li>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About me</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Contact">Contact Me</Link></li>
            </ul>
        </nav>
    </div>
    )
}