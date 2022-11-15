import './Login.css';
import {useState} from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://localhost:8080/login";

  async function doLogin(){
    try{
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': email, 
          'password': password
        })
      })

      handleResponse(response);

    } catch(error){
        handleResponse(false);
        console.log(error);
    }
  }

  function handleResponse(ok){
    if(ok){
      alert("Login feito com sucesso!");
    }
    else{
      alert("Falha no login...");
    }
  }

  return (
    <div className="container">
      <div className="login-form">
        <h1>Login</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={() => doLogin()}>Send</button>
      </div>
    </div>
  );
}

export default Login;
