import "./Footer.css";
import FooterSiteLogo from '../../assets/images/escape-logo.svg'

const Footer = () => {
    return (
        <footer className="site_footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_site_logo">
                        <img src={FooterSiteLogo} alt="Site Logo" />
                    </div>
                    <ul className="footer_list">
                        <li className="footer_item"><a href="#"><span>Home</span></a></li>
                        <li className="footer_item"><a href="#"><span>Categories</span></a></li>
                        <li className="footer_item"><a href="#"><span>About</span></a></li>
                        <li className="footer_item"><a href="#"><span>Contact</span></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;