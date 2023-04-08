import Jogador from '../Jogador'
import './Posicao.css'

const Posicao = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.jogadores.length > 0) ? <section className='posicao' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => {
                    console.log(<Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} equipe={jogador.equipe} imagem={jogador.imagem} aoDeletar={() => {}} />);
                    return <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} equipe={jogador.equipe} imagem={jogador.imagem} aoDeletar={() => {}} />;
                })}
            </div>
        </section>
        : ''
    )
}

export default Posicao