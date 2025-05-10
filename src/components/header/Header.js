import SiteLogo from "../../assets/images/escape-logo.svg";
import NavMenuIcon from "../../assets/images/nav-menu.svg";
import "./Header.css";

const Header = () => {
    return (
        <header className="site_header">
            <div className="container">
                <nav className="header_nav">
                    <div className="header_nav_logo">
                        <img src={SiteLogo} alt="Escape Logo" />
                    </div>
                    <ul className="header_nav_list">
                        <li className="header_nav_item"><a href="#"><span>Home</span></a></li>
                        <li className="header_nav_item"><a href="#"><span>Categories</span></a></li>
                        <li className="header_nav_item"><a href="#"><span>About</span></a></li>
                        <li className="header_nav_item"><a href="#"><span>Contact</span></a></li>
                    </ul>
                    <div className="nav_menu">
                        <img src={NavMenuIcon} alt="Menu Icon" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;