import "./Footer.scss"

function Footer({text}) {
    return (
            <footer className="footer">
                <p className="footer-text">{text}</p>
            </footer>
    )
}
export default Footer