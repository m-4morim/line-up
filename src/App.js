import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {

  const times = [
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
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      <Footer />
    </div>
  );
}

export default App;
