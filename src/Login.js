import './css/login.css';
import './css/global.css';
import {useState} from 'react';

function Login({setComponent}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "https://ef298b0e-4018-4748-bb80-885dd865dd74.mock.pstmn.io/login";

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
        alert("Falha no login...");
        console.log(error);
    }
  }

  function handleResponse(response){
    if(response.ok){
      response.json().then((body) => {
        body.isAdmin === "true" ? setComponent("AdminHome") : setComponent("ClientHome");
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
        <input type="text" placeholder="Usuário"/>
        <input type="password" placeholder="Senha"/>
        <button onClick={() => doLogin()}>Log in</button>
        <div className="otherOptions">
          <a href="#">Novo usuário? Cadastre-se</a>
          <a href="#">Esqueceu a senha</a>
        </div>
      </form>
  </div>
  );
}

export default Login;
