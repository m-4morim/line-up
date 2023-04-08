import './Jogador.css'

const Jogador = ({ jogador, corDeFundo }) => {
    return (<div className='jogador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={jogador.imagem} alt={jogador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{jogador.nome}</h4>
            <h5>{jogador.equipe}</h5>
        </div>
    </div>)
}

export default Jogador