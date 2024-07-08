import './Formulaire.scss'
import {useNavigate} from 'react-router-dom'

function Formulaire() {
    const navigate = useNavigate()
    const hundelSubmit = (e) => {
        e.preventDefault()
        navigate('/account')
    }
    return (
        <div className="container-formulaire">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={hundelSubmit}>
                        <div className="input-wrapper">
                            <label for="username">Username</label
                            ><input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label for="password">Password</label
                            ><input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label for="remember-me"
                            >Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Formulaire