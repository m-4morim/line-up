import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';
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
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {posicoes.map(posicao => <Posicao
        key={posicao.nome}
        nome={posicao.nome}
        corPrimaria={posicao.corPrimaria}
        corSecundaria={posicao.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.posicao === posicao.nome)}
      />)}
      
      <Footer />
    </div>
  );
}

export default App;