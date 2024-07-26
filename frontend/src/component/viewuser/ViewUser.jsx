// import { useDispatch, useSelector } from "react-redux"
// import { useState } from "react"
// import { profil } from "../../services/serviceAPI"
import "./ViewUser.scss"

function ViewUser({ close, userName, firstName, lastName }) {
    return (
        <div className="viewUser">
            <h1 className="title">Edit user info</h1>
            <form className="formViewUser">
                <div className="inputForm">
                    <label className="labelForm" htmlFor="userName">User Name:</label>
                    <input id="userName" type="text" placeholder="User Name" value={userName} />
                </div>
                <div className="inputForm">
                    <label className="labelForm" htmlFor="firstName">First Name:</label>
                    <input className="inputOpacity" id="firstName" type="text" placeholder="First Name" defaultValue={firstName} readOnly />
                </div>
                <div className="inputForm">
                    <label className="labelForm" htmlFor="lastName">Last Name:</label>
                    <input className="inputOpacity" id="lastName" type="text" placeholder="Last Name" defaultValue={lastName} readOnly />
                </div>
                <div className="buttons">
                    <button className="btn">Save</button>
                    <button className="btn" onClick={close}>Cancel</button>
                </div>

            </form>

        </div>
    )
}

export default ViewUser