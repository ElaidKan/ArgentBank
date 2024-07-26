import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { disconnect } from "../../redux/slice/Connect.slice";


function Navbar({ title, lien, user }) {
    const dispatch = useDispatch();
    const connected = useSelector((state) => state.connect.connected);
    const disconnect = () => {
        dispatch(disconnect())
    }
    return (
        <div>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">{title}</h1>
                </Link>
                <div>
                    {connected ? (
                        <div>
                            <Link className="main-nav-item" to="/account">
                                <i className="fa fa-user-circle"></i>
                                {user}
                            </Link>

                            <Link className="main-nav-item" to="/" onClick={disconnect}>
                                <i className="fa fa-user-circle"></i>
                                {lien}
                            </Link>
                        </div>
                    ) : (
                        <Link className="main-nav-item" to="/signin">
                            <i className="fa fa-user-circle"></i>
                            {lien}
                        </Link>

                    )}

                </div>
            </nav >
        </div >
    )
}

export default Navbar