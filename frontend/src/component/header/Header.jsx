import "./Header.scss"
import { useSelector } from "react-redux"
import { useState } from "react"
import ViewUser from "../viewuser/ViewUser"


function Header() {
    const [viewProfil, setViewProfil] = useState(false)
    const user = useSelector((state) => state.profil.user)

    const hundlerViewProfil = () => {
        setViewProfil(!viewProfil)
    }

    return (
        <div className="header">
            {!viewProfil &&
                <div>
                    <h1>Welcome back<br />{user?.firstName} {user?.lastName}</h1>
                    <button onClick={hundlerViewProfil} className="edit-button">Edit Name</button>
                </div>
            }
            {viewProfil && <ViewUser close={hundlerViewProfil} userName={user?.userName} firstName={user?.firstName} lastName={user?.lastName} />}
        </div>
    )
}

export default Header