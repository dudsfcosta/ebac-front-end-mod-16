import { useState } from "react";
import "./Tarefa.css"

function Tarefa({texto}) {

    const [concluida, setConcluida] = useState(false);

    const alternarConcluida = () => {

        setConcluida(!concluida);
    }

    return (<li><input type="checkbox" onChange={alternarConcluida}/><span className={ concluida ? 'concluida' : '' }>{texto}</span><button>Remover</button></li>)
    // TODO funcionalidade de "remover"
}

export default Tarefa;