import './Footer.css'

export const Footer = () => {
    // JSX
    return (
        <footer className="footer">
            <div className="footer-texto">
                <p>Criado por @Marcos Amorim - </p>
                <a href="https://github.com/m-4morim/line-up">
                    <img src="/imagens/github-logo.jpg" alt="GitHub"/>
                    <p> GitHub</p>
                </a>
            </div>
            <img className="footer-img" src="/imagens/footer.jpg" alt="Bola oficial da NBA" />
        </footer>
    )
}