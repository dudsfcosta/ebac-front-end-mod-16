import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// @ts-expect-error I don't know, just stop screaming
import Tarefa from './components/Tarefa.jsx'

function App() {
  const tarefas = [
      {key: 1, texto: "Estudar React"},
      {key: 2, texto: "Fazer compras"},
      {key: 3, texto: "Responder e-mails"}
  ]

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
