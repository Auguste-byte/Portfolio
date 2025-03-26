import userDatas from "../../data/UserData";
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    
    return (
    <header className="header">
        <div className="user">
            <div className="header-name">{userDatas.lastName} {userDatas.firstName} </div>
            <div className="header-career">{userDatas.career}</div>
        </div>
        <div className="nav-links">
            <div className="projects-link"><Link to="/projects">Projets</Link></div>
            <div className="curiculum-link"><Link to="/curiculum">Curiculum</Link></div>
            <div className="contact-link"><Link to="/contact">Contact</Link></div>
            <div className="home-link"><Link to="/"><img src="src/assets/domicile.png" alt="Home" className="home-image"/></Link></div>
        </div>
    </header>
)};

export default Header;