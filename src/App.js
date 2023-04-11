import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';
import MeuTime from './componentes/MeuTime';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [posicoes, setPosicoes] = useState([
    {
      id: uuidv4(),
      nome: 'Guard',
      cor: '#CD0404',
    },
    {
      id: uuidv4(),
      nome: 'Guard-Forward',
      cor: '#144272',
    },
    {
      id: uuidv4(),
      nome: 'Forward',
      cor: '#CD0404',
    },
    {
      id: uuidv4(),
      nome: 'Center-Forward',
      cor: '#144272',
    },
    {
      id: uuidv4(),
      nome: 'Center',
      cor: '#CD0404',
    },
  ]);
  
  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador(id) {
    setJogadores(jogadores.filter(jogador => jogador.id !== id));
  }

  function mudarCorDaPosicao(cor, id) {
    setPosicoes(posicoes.map(posicao => {
      if(posicao.id == id) {
        posicao.cor = cor;
      }
      return posicao;
    }));
  }

  function cadastrarBanco(banco) {
    setPosicoes([ ...posicoes, { ...banco, id: uuidv4() } ])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarBanco={cadastrarBanco}
        posicoes={posicoes.map(posicao => posicao.nome)}
        aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}
      />

      {posicoes.map((posicao, indice) =>
        <Posicao
          mudarCor={mudarCorDaPosicao}
          key={indice}
          posicao={posicao}
          jogadores={jogadores.filter(jogador => jogador.posicao
          === posicao.nome)}
          aoDeletar={deletarJogador}
        />
      )}
      
      <MeuTime />
      <Footer />
    </div>
  );
}

export default App;