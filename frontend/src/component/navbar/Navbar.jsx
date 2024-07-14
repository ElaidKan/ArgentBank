import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar({ title, lien }) {
    return (
        <div>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="./">
                    <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">{title}</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="./signin">
                        <i className="fa fa-user-circle"></i>
                        {lien}
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar