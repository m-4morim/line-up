import './Jogador.css'

const Jogador = ({ nome, imagem, equipe, corDeFundo }) => {
    return (<div className='jogador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{equipe}</h5>
        </div>
    </div>)
}

export default Jogador