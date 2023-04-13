import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Jogador.css'

const Jogador = ({ jogador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(jogador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className='jogador'>
        <AiFillCloseCircle
            size={25}
            className='deletar'
            onClick={() => aoDeletar(jogador.id)}
        />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={jogador.imagem} alt={jogador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{jogador.nome}</h4>
            <h5>{jogador.equipe}</h5>
            <div className='favoritar'>
                {jogador.favorito
                    ? <AiFillHeart {...propsfavorito} color='#FF0000' />
                    : <AiOutlineHeart {...propsfavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Jogador