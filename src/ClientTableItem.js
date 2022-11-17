function ClientTableItem(props){
    const {nome, raca, idade, vacinado, castrado} = props.item;
    return(
        <div class="animal" key={props.index}>
            <h3>{nome}</h3>
            <p>{raca}</p>
            <p>{idade}</p>
            <p>{vacinado}</p>
            <p>{castrado}</p>
        </div>
    );

}

export default ClientTableItem;