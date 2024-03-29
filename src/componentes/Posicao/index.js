import Jogador from '../Jogador'
import './Posicao.css'
import hexToRgba from 'hex-to-rgba'

const Posicao = ({ posicao, jogadores, aoDeletar, mudarCor, aoFavoritar }) => {

    const css = { backgroundColor: hexToRgba(posicao.cor, '0.6') }
    return (
        (jogadores.length > 0) ? <section className='posicao' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, posicao.id)} value={posicao.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: posicao.cor }}>{posicao.nome}</h3>
            <div className='jogadores'>
                {jogadores.map((jogador, indice) => {
                    return (
                        <Jogador
                            key={indice}
                            jogador={jogador}
                            corDeFundo={posicao.cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    );
                })}
            </div>
        </section>
        : ''
    )
}

export default Posicao