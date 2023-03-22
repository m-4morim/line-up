import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header>
            <div className="banner">
                <img src="/imagens/banner.jpg" alt="Disputa por uma jogada na NBA" />
            </div>
            <div className="banner-logo">
                <img src="/imagens/logo.jpg" alt="Logo da NBA" />
            </div>
        </header>
    )
}