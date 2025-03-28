import userDatas from "../../data/UserData";
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
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
            <div className="home-link">
                <Link to="/Portfolio"> 
                    <div style={{ display: "flex", gap: "10px", fontSize: "2rem" }}>
                                <FaHome style={{ color: "#ffffff" }} />
                    </div>
                </Link>
            </div>
        </div>
    </header>
)};

export default Header;