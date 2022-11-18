import './css/login.css';
import './css/global.css';
import {useState} from 'react';

function Login({setComponent}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://localhost:8000/login/";

  async function doLogin(e){
    e.preventDefault();
    try{
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': email, 
          'password': password
        }),
      })

      handleResponse(response);

    } catch(error){
        alert("Falha no login...");
        console.log(error);
    }
  }

  function handleResponse(response){
    if(response.ok){
      response.json().then((body) => {
        body.isAdmin ? setComponent("AdminHome") : setComponent("ClientHome");
      })
    }
    else{
      alert("Falha no login...");
    }
  }

  return (
    <div className="card">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Usuário" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(e) => doLogin(e)}>Log in</button>
        <div className="otherOptions">
          <a href="#">Novo usuário? Cadastre-se</a>
          <a href="#">Esqueceu a senha</a>
        </div>
      </form>
  </div>
  );
}

export default Login;
