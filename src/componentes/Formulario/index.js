import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [equipe, setEquipe] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicao, setPosicao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            equipe,
            imagem,
            posicao
        })
        setNome('')
        setEquipe('')
        setImagem('')
        setPosicao('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Qual é o seu <strong className="texto-destaque">Dream Team</strong> da NBA?</h2>
                <h2>Preencha os dados dos seus jogadores favoritos e monte o seu melhor time de todos os tempos:</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Equipe"
                    placeholder="Digite a equipe que ele jogou(a)"
                    valor={equipe}
                    aoAlterado={valor => setEquipe(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Posição"
                    itens={props.posicoes}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />
                <Botao texto="Adicionar Jogador"/>
            </form>
        </section>
    )
}

export default Formulario