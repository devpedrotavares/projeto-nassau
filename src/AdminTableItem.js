function AdminTableItem(props){
    const {nome, raca, idade, vacinado, castrado} = props.item;
    return(
        <div className="animal" key={props.index}>
            <h3>{nome}</h3>
            <p>{raca}</p>
            <p>{idade}</p>
            <p>{vacinado ? "Sim" : "Não"}</p>
            <p>{castrado ? "Sim" : "Não"}</p>
            <button onClick={() => props.handleDelete(props.key)} className="add-delete-button">-</button>
        </div>
    );
}

export default AdminTableItem;