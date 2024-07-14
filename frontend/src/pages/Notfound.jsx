import Footer from "../component/footer/Footer";
import Error from "../component/error404/Error404";
import Navbar from "../component/navbar/Navbar";

function Notfound() {
    return (
        <div>
            <Navbar title={"Argent Bank"} lien={"Sign in"} />
            <Error />
            <Footer text={"Copyright 2020 Argent Bank"} />

        </div>
    )
}
export default Notfound