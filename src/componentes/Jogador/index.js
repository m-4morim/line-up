import { AiFillCloseCircle } from 'react-icons/ai';
import './Jogador.css'

const Jogador = ({ jogador, corDeFundo, aoDeletar }) => {
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
        </div>
    </div>)
}

export default Jogador