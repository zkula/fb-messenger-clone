import React, {useState, useEffect} from 'react';
import './App.css';
import { Button, FormHelperText, InputLabel, Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Message from "./Message"
import {db,auth} from "./firebase.js"
import Header from './Header';

function App() {
const [input, setInput] = useState('');
const[messages,setMessages] = useState([{
  name:'Zach',
  text: 'Whats up its Zach',
}]);
const[username, setUsername] = useState('');

// useEffect (()=>{
  
//   setUsername (prompt('Please enter name:'))
// },[])

// useEffect(()=>{

// },[messages])

const sendMessage = (event) => {
  //DB Logic
  event.preventDefault();
  if(input === "CLR"){
    setMessages([{}]);
  }else {
    setMessages([...messages,{name: username,
      text: input,
      }]);
  }
  
  setInput('');
  
}

const handleUsername = (user) => {
  console.log("HANDLER", user);
  setUsername(user.displayName);
}

  return (
    <div className="app">
      <Header usernameHandler = {handleUsername}/>
      <h1>Main Chat</h1>
      <p className="app__description">Enter "CLR" to clear the chat</p>
        
      <div className="app__messages">
        {messages.map((message)=>(
          <Message username={username} message={message} />
        ))}
      </div>
      

      <FormControl className="app__form">
        <div className="app__formInput">
          <InputLabel>Enter a message...</InputLabel>
          <Input  type="text" value={input} onChange={event => setInput(event.target.value)} className="app__input"/>   
        </div>
        
        <Button disabled={!input} variant='contained' color='primary' type="submit" onClick={sendMessage} className="app__submit">Send Message</Button>
      </FormControl>
    </div>
  );
}

export default App;
