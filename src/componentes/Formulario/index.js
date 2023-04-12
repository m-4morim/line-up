import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoJogadorCadastrado, posicoes, cadastrarBanco }) => {

    const [nome, setNome] = useState('')
    const [equipe, setEquipe] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicao, setPosicao] = useState('')
    const [nomeBanco, setNomeBanco] = useState('')
    const [corEquipe, setCorEquipe] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoJogadorCadastrado({
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
                <h2>Preencha os dados dos seus jogadores favoritos e monte o melhor time de todos os tempos:</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Equipe"
                    placeholder="Digite a equipe que ele jogou(a)"
                    valor={equipe}
                    aoAlterado={valor => setEquipe(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Posição"
                    itens={posicoes}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />
                <Botao texto="Adicionar Jogador"/>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarBanco({ nome: nomeBanco, cor: corEquipe })
            }}>
                <h2>E quem mais faria parte do elenco?</h2>
                <h2>Adicione também um treinador e/ou jogadores reservas, selecionando-os ao lado:</h2>
                <Campo
                    obrigatorio
                    label="Elenco"
                    placeholder="Digite Treinador ou Jogadores Reservas" 
                    valor={nomeBanco}
                    aoAlterado={valor => setNomeBanco(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor desejada da equipe fora da quadra"
                    valor={corEquipe}
                    aoAlterado={valor => setCorEquipe(valor)}
                />
                <Botao texto="Adicionar Treinador ou Jogador"/>
            </form>
        </section>
    )
}

export default Formulario