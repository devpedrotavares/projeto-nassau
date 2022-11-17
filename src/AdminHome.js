import AdminTableItem from './AdminTableItem';
import AnimalInput from './AnimalInput';
import "./css/animais.css";
import "./css/global.css";
import {useState} from 'react';
import {useEffect} from 'react';

function AdminHome(){
    const [animals, setAnimals] = useState([]);

    const API_URL = "http://localhost:8080/animais";

    
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

    async function handleDelete(index){
      try{
        
        //falta adicionar o index correto à URL
        const response = await fetch(API_URL + "/" + index, {
          method: 'DELETE'
        })

        if(response.ok){
          animals.splice(index, 1);
          setAnimals([...animals]);
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
        
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "nome": animal.nome,
            "raca": animal.raca,
            "idade": animal.idade,
            "vacinado": animal.vacinado,
            "castrado": animal.castrado,
          })
        })

        if(response.ok){
          setAnimals([...animals, animal]);
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