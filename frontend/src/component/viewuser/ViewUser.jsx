import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { profile, changeUserName } from "../../services/serviceAPI"
import "./ViewUser.scss"

function ViewUser({ close, userName, firstName, lastName }) {
    const [newPseudo, setNewPseudo] = useState(userName)
    const error = useSelector(state => state.changeUserName.error);
    const dispatch = useDispatch();
    const hundelChangeUserName = async (e) => {
        e.preventDefault()
        const succes = await dispatch(changeUserName({ newUserName: newPseudo }))
        if (changeUserName.fulfilled.match(succes)) {
            dispatch(profile())
            close()
        }
    }
    return (
        <div className="viewUser">
            <h1 className="title">Edit user info</h1>
            <form className="formViewUser" onSubmit={hundelChangeUserName}>
                <div className="inputForm">
                    <label className="labelForm" htmlFor="userName">User Name:</label>
                    <input id="userName" type="text" placeholder="User Name" value={newPseudo} onChange={(e) => setNewPseudo(e.target.value)} />
                </div>
                <div className="inputForm">
                    <label className="labelForm" htmlFor="firstName">First Name:</label>
                    <input className="inputOpacity" id="firstName" type="text" placeholder="First Name" defaultValue={firstName} readOnly />
                </div>
                <div className="inputForm">
                    <label className="labelForm" htmlFor="lastName">Last Name:</label>
                    <input className="inputOpacity" id="lastName" type="text" placeholder="Last Name" defaultValue={lastName} readOnly />
                </div>

                {error && <p className="error">Bonjour</p>}
                <div className="buttons">
                    <button className="btn">Save</button>
                    <button className="btn" onClick={close}>Cancel</button>
                </div>

            </form>

        </div>
    )
}

export default ViewUser