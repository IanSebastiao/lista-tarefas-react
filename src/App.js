
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListaDeTarefas from './components/ListaDeTarefas';
import Formulario from './components/Formulario';

const App = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React' },
    { id: 2, texto: 'Tomar café' },
    { id: 3, texto: 'Resolver exercícios' }
  ]);

  const [editandoId, setEditandoId] = useState(null);

  const adicionarTarefa = (texto) => {
    const novaTarefa = { id: Date.now(), texto };
    setTarefas([...tarefas, novaTarefa])
  }

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const iniciarEdicao = (id) => {
    setEditandoId(id);
  }

  const salvarEdicao = (id, novoTexto) => {
    setTarefas(tarefas.map(t => (t.id === id? {...t, texto: novoTexto} : t)));
    setEditandoId(null);
  }
  return (
    <div className='container mt-4' >
      <Header />
      <Formulario adicionarTarefa={adicionarTarefa}/>
      <ListaDeTarefas
      tarefas={tarefas}
      removerTarefa={removerTarefa}
      editandoId={editandoId}
      iniciarEdicao={iniciarEdicao}
      salvarEdicao={salvarEdicao} 
      />
      <Footer />
    </div>
  );
}

export default App;
