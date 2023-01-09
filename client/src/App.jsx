import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email && password)

      // conso de l'API
      fetch("http://localhost:9000/api/login",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({email, password})
      }).then(res => res.json())
        .then(
           res => {
         
            const { success, token, user } = res;

            console.log(success);
            console.log(token);
            console.log(user);

          }
        )
        .catch(console.log)


    setPassword('');
    setEmail('');
   
  }

  const handleChange = (e) => {
    const { name, value  } = e.target ;
    console.log(name, value);

    if(name === 'password')
      setPassword(value);
    if(name ==='email')
     setEmail(value);

  } 
  
  return (
    <div className="App">
     <form  onSubmit={handleSubmit} >
      <p>Email <input type="email" name="email" value={email} onChange={handleChange} /> </p>
      {email && (
        <p>{email}</p>
      )}
      <p>Password <input type="password" name="password" value={password} onChange={handleChange} /> </p>
      <button>
        Login 
      </button>
     </form>
    </div>
  )
}

export default App
