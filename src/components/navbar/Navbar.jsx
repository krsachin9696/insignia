import logo from "../../assets/insignia.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <img src={logo} alt="insignia logo" />
                <div className="nav-link">
                    <div className="down">Download Broucher</div>
                    <button className="contact">Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default Navbar