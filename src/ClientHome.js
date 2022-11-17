import ClientTableItem from './ClientTableItem';
import "./css/animais.css";
import "./css/global.css";
import {useState} from 'react';
import {useEffect} from 'react';

function ClientHome(){
    const [animals, setAnimals] = useState([]);

    const API_URL = "http://localhost:8080";

    async function doFetchAnimals(){
        try{
          const response = await fetch(API_URL, {
            method: 'GET'
          })
          
          const body = await response.json();
          setAnimals(body);

        } catch(error){
            alert("Um erro ocorreu...");
            console.log(error);
        }
      }

      useEffect(() => {
        doFetchAnimals()
      }, []);

    return(
        <div class="card" id="animais">
        <h1>Animais disponíveis para adoção</h1>
          <div class="titulo">
            <h2 class="nome">Nome</h2>
            <h2 class="raca">Raça</h2>
            <h2 class="idade">Idade</h2>
            <h2 class="vacinacao">Vacinado</h2>
            <h2 class="castracao">Castrado</h2>
          </div>
          <div class="animais">
            {animals.map((animal, index) => <ClientTableItem item={animal} index={index}/>
            )}
          </div>
          <a href="https://wa.me/numeroEmpresa" target="_blank">Entrar em contato</a>
        </div>
    );
}

export default ClientHome;