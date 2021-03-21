import React, {useState} from 'react'
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello']);
  console.log(input);
  console.log(messages);

  const sendMessage = (event) =>{
    //all logic to send message
    event.preventDefault();// this is used for stop refesh
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Messanger App</h1>

    <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input/>
    </FormControl>

      <form>
        <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} color='primary' type='submit' onClick={sendMessage}>Send Meassage</Button>

      </form>
      
      {
        messages.map(messages =>(
          <p>{messages}</p>
        ))
      }
    </div>
  );
}

export default App;
