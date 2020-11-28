import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  
  const [repositorio, setRepositorio] = useState ([{textini: 'Este texto contém ', id: 0, textofim: ' caracteres.'}]);

  const EditChannelName = (event) => {     
     setRepositorio([{textini: 'Este texto contém ', id: event.target.value.length, textofim: ' caracteres.'}])
  }

  return (
    <div class="container">
      <form>
        <input type="text" onChange={EditChannelName}></input>
        <ul>
	        {repositorio.map(repo => (<li> key={repo.textini} {repo.id} {repo.textofim}</li>))}
        </ul>
      </form>
    </div>
  );
}

