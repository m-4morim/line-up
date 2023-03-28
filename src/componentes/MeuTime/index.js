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
                <p>Kobe Bryant</p>
            </div>
            <div className="meu-time">
                <img src="/imagens/jogadores/LeBronJames.jpg" alt="LeBron James" />
                <p>LeBron James</p>
            </div>
            <div className="meu-time">
                <img src="/imagens/jogadores/ShaquilleO'Neal.jpg" alt="Shaquille O'Neal" />
                <p>Shaquille O'Neal</p>
            </div>

            <p className="meu-time-texto">Essa seria minha sugestão de escolha. E aí, será que seria um bom jogo?</p>

        </section>
    )
}

export default MeuTime