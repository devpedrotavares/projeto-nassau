import ClientTableItem from './ClientTableItem';
import "./css/animais.css";
import "./css/global.css";
import {useState} from 'react';
import {useEffect} from 'react';

function ClientHome(){
    const [animals, setAnimals] = useState([]);

    const API_URL = "http://localhost:8000";

    async function doFetchAnimals(){
      try{
        const response = await fetch(API_URL + "/animais", {
          method: 'GET'
        })
        
        const body = await response.json();
        console.log(body);
        setAnimals(convertToAnimals(body));

      } catch(error){
          alert("Um erro ocorreu...");
          console.log(error);
      }
    }

    function convertToAnimals(array){
      const result = [];
      for(let i = 0; i < array.length; i++){
        result.push({
          "id": array[i][0],
          "nome": array[i][1],
          "raca":array[i][2],
          "vacinado": array[i][3],
          "castrado": array[i][4],
          "idade": array[i][5]
        });
      }
      return result;
    }

      useEffect(() => {
        doFetchAnimals()
      }, []);

    return(
        <div className="card" id="animais">
        <h1>Animais disponíveis para adoção</h1>
          <div className="titulo">
            <h2 className="id">ID</h2>
            <h2 className="nome">Nome</h2>
            <h2 className="raca">Raça</h2>
            <h2 className="idade">Idade</h2>
            <h2 className="vacinacao">Vacinado</h2>
            <h2 className="castracao">Castrado</h2>
          </div>
          <div className="animais">
            {animals.map((animal, index) => <ClientTableItem key={index} item={animal} index={index}/>
            )}
          </div>
          <a href="https://wa.me/numeroEmpresa" target="_blank">Entrar em contato</a>
        </div>
    );
}

export default ClientHome;