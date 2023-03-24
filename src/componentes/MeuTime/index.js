import './MeuTime.css'

const MeuTime = () => {
    // JSX
    return (
        <section>

            <div className="meu-time">
                <img src="/imagens/jogadores/JohnStockton.jpg" alt="John Stockton" />
                <p>John Stockton</p>
            </div>
            <div className="meu-time">
                <img src="/imagens/jogadores/AllenIverson.jpg" alt="Allen Iverson" />
                <p>Allen Iverson</p>
            </div>
            <div className="meu-time"> 
                <img src="/imagens/jogadores/KobeBryant.jpg" alt="Kobe Bryant" />
            </div>
            <div className="meu-time">
                <img src="/imagens/jogadores/LeBronJames.jpg" alt="LeBron James" />
            </div>
            <div className="meu-time">
                <img src="/imagens/jogadores/ShaquilleO'Neal.jpg" alt="Shaquille O'Neal" />
            </div>

            <blockquote className="legenda">Essa seria a minha line-up</blockquote>

        </section>
    )
}

export default MeuTime