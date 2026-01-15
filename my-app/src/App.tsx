import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// @ts-expect-error I don't know, just stop screaming
import Tarefa from './components/Tarefa.jsx'
import {useState} from "react";

function App() {
    const [tarefas, setTarefas] = useState( [
        {key: 1, texto: "Estudar React"},
        {key: 2, texto: "Fazer compras"},
        {key: 3, texto: "Responder e-mails"}
    ])

    const [novaTarefa, setNovaTarefa] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        if (novaTarefa.trim() === '') return;
        const novoId = tarefas[tarefas.length - 1].key+1;
        const nova = {

            key: novoId,
            texto: novaTarefa.trim()
        }
        setTarefas([...tarefas, nova]);
        setNovaTarefa('');
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div>
                <h1>To-Do List App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Digite uma nova tarefa"
                     value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}/>
                    <button type="submit">Adicionar</button>
                </form>
                <ul>
                    {tarefas.map(tarefa => <Tarefa key={tarefa.key} texto={tarefa.texto}></Tarefa>)}
                </ul>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
      </>
    )
}

export default App
