import './Formulaire.scss'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, profile } from '../../services/serviceAPI'

function Formulaire() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const error = useSelector(state => state.connect.error)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hundelSubmit = async (e) => {
        e.preventDefault()
        await dispatch(login({ email, password }))
        navigate('/account')
        await dispatch(profile())
    }

    const hundelChangeMail = (e) => {
        setEmail(e.target.value)
    }

    const hundelChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="container-formulaire">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={hundelSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" value={email} onChange={hundelChangeMail} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={hundelChangePassword} required />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                            >Remember me</label>
                        </div>
                        {error && <p className="error-message">E-mail ou mot de passe incorrect</p>}
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Formulaire