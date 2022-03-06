import React from 'react'
import './App.css';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar'
import Image from './assests/image.jpg'
import LoginFormTemp from './components/LoginFormTemp'


function App() {
  return (
    <div className='app' >
      <Navbar />
      <LoginForm/>
      <img src={Image} />
      
    </div>
  );
}

export default App;
