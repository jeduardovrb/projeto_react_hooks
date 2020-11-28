import React, {useState} from 'react';
import './App.css';

export default function App() {
  
  const [repositorio, setRepositorio] = useState ([{textini: 'Esse texto contém ', id: 0, textofim: ' caracteres.'}]);

  const EditChannelName = (event) => {     
     setRepositorio([{textini: 'Esse texto contém ', id: event.target.value.length, textofim: ' caracteres.'}])
  }

  return (
    <div class="content">
      <form>
        <input type="text" onChange={EditChannelName}></input>
        {repositorio.map(repo => (<p>{repo.textini} {repo.id} {repo.textofim}</p>))}
      </form>
    </div>
  );
}

