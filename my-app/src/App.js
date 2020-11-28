import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [txt, setTxt] = useState ([{textini: 'Esse texto contém ', id: 0, textofim: ' caracteres.'}]);

  const EditChannelName = (event) => {     
    setTxt([{textini: 'Esse texto contém ', id: event.target.value.length, textofim: ' caracteres.'}])
  }   

  return (
    <div class="content">
      <form>
        <input type="text" onChange={EditChannelName}></input>
          {txt.map(t => (<p>{t.textini} {t.id} {t.textofim}</p>))}
      </form>
    </div>
  );  
}