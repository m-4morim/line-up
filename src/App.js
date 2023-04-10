import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';
import MeuTime from './componentes/MeuTime';
import Footer from './componentes/Footer';

function App() {

  const [posicoes, setPosicoes] = useState([
    {
      nome: 'Guard',
      cor: '#CD0404',
    },
    {
      nome: 'Guard-Forward',
      cor: '#144272',
    },
    {
      nome: 'Forward',
      cor: '#CD0404',
    },
    {
      nome: 'Center-Forward',
      cor: '#144272',
    },
    {
      nome: 'Center',
      cor: '#CD0404',
    },
  ]);
  
  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador() {
    console.log('Deletando jogador');
  }

  function mudarCorDaPosicao(cor, nome) {
    setPosicoes(posicoes.map(posicao => {
      if(posicao.nome == nome) {
        posicao.cor = cor;
      }
      return posicao;
    }));
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

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