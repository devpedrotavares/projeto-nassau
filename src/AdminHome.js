import AdminTableItem from './AdminTableItem';
import AnimalInput from './AnimalInput';
import "./css/animais.css";
import "./css/global.css";
import {useState} from 'react';
import {useEffect} from 'react';

function AdminHome(){
    const [animals, setAnimals] = useState([]);

    const API_URL = "http://localhost:8000";
    
    async function doFetchAnimals(){
        try{
          const response = await fetch(API_URL + "/animais", {
            method: 'GET'
          })
          
          const body = await response.json();
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

    async function handleDelete(id){
      try{
        const response = await fetch(API_URL + "/delanimal/" + id, {
          method: 'GET'
        })

        if(response.ok){
          setAnimals(animals.filter(animal => animal.id !== id));
        }
        else{
          alert("Não foi possível deletar...");
        }

      } catch(error){
          alert("Um erro ocorreu...");
          console.log(error);
      }
    }

    async function handleAdd(animal){
      try{
        
        const response = await fetch(API_URL + "/cadanimal/", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "id": 0,
            "nome": animal.nome,
            "raca": animal.raca,
            "idade": animal.idade,
            "vacinado": animal.vacinado,
            "castrado": animal.castrado,
          })
        })

        if(response.ok){
          const body = await response.json();
          setAnimals([...animals, {...animal, "id": body.id}]);
        }
        else{
          alert("Não foi possível criar o animal...");
        }

      } catch(error){
          alert("Um erro ocorreu...");
          console.log(error);
      }
    }

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
            {animals.map((animal, index) => <AdminTableItem key={index} item={animal} handleDelete={handleDelete}/>
            )}
          </div>
          <div className="animais">
            <AnimalInput handleAdd={handleAdd}/>
          </div>
        </div>
    );
}

export default AdminHome;