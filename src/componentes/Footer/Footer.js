import './Footer.css'

export const Footer = () => {
    // JSX
    return (
        <footer className="footer">
            <h4>Criado por @Marcos Amorim</h4>
            <div className="footer-link">
                <img src="/imagens/github-logo.jpg" />
                <a href="https://github.com/m-4morim/line-up">
                    <h4>GitHub</h4>
                </a>
            </div>
            <img className="footer-img" src="/imagens/footer.jpg" alt="Bola oficial da NBA" />
        </footer>
    )
}