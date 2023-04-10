import Jogador from '../Jogador'
import './Posicao.css'

const Posicao = ({ posicao, jogadores, aoDeletar, mudarCor }) => {

    const css = { backgroundColor: posicao.corSecundaria }
    return (
        (jogadores.length > 0) ? <section className='posicao' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, posicao.nome)} value={posicao.corSecundaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: posicao.corPrimaria }}>{posicao.nome}</h3>
            <div className='jogadores'>
                {jogadores.map((jogador, indice) => {
                    return <Jogador key={indice} jogador={jogador} corDeFundo={posicao.corPrimaria} aoDeletar={aoDeletar} />;
                })}
            </div>
        </section>
        : ''
    )
}

export default Posicao