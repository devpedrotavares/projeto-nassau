import {useState} from 'react';

function AnimalInput(props){
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [idade, setIdade] = useState("");
    const [vacinado, setVacinado] = useState(false);
    const [castrado, setCastrado] = useState(false);

    return(
        <div className="animal">
            <input className="animal-input" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input className="animal-input" value={raca} onChange={(e) => setRaca(e.target.value)}/>
            <input className="animal-input" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            <input className="animal-input" type="checkbox" onChange={(e) => setVacinado(e.target.checked)}/>
            <input className="animal-input" type="checkbox" onChange={(e) => setCastrado(e.target.checked)}/>
            <button onClick={() => props.handleAdd({"nome":nome, "raca":raca, "idade":idade, "vacinado":vacinado, "castrado":castrado})} className="add-delete-button">+</button>
        </div>
    );
}

export default AnimalInput;