import Footer from "../component/footer/Footer";
import Error from "../component/error404/Error404";
import Navbar from "../component/navbar/Navbar";

function Notfound() {
    return (
        <div>
            <Navbar />
            <Error />
            <Footer />

        </div>
    )
}
export default Notfound