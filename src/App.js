import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';
import MeuTime from './componentes/MeuTime';
import Footer from './componentes/Footer';

function App() {

  const posicoes = [
    {
      nome: 'Guard',
      corPrimaria: '#CD0404',
      corSecundaria: '#F5EAEA'
    },
    {
      nome: 'Guard-Forward',
      corPrimaria: '#144272',
      corSecundaria: '#ECF9FF'
    },
    {
      nome: 'Forward',
      corPrimaria: '#CD0404',
      corSecundaria: '#F5EAEA'
    },
    {
      nome: 'Center-Forward',
      corPrimaria: '#144272',
      corSecundaria: '#ECF9FF'
    },
    {
      nome: 'Center',
      corPrimaria: '#CD0404',
      corSecundaria: '#F5EAEA'
    },
  ]
  
  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador() {
    console.log('Deletando jogador');
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {posicoes.map((posicao, indice) =>
        <Posicao
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