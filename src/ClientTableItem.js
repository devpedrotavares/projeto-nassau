function ClientTableItem(props){
    const {id, nome, raca, idade, vacinado, castrado} = props.item;
    return(
        <div class="animal" key={props.index}>
            <h3>{id}</h3>
            <p>{nome}</p>
            <p>{raca}</p>
            <p>{idade}</p>
            <p>{vacinado ? "Sim" : "Não"}</p>
            <p>{castrado ? "Sim" : "Não"}</p>
        </div>
    );

}

export default ClientTableItem;