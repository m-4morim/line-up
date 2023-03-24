import Jogador from '../Jogador'
import './Posicao.css'

const Posicao = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className='posicao' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => <Jogador nome={jogador.nome} equipe={jogador.equipe} imagem={jogador.imagem}/> )}
            </div>
        </section>
    )
}

export default Posicao