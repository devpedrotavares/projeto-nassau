function AdminTableItem(props){
    const {id, nome, raca, idade, vacinado, castrado} = props.item;
    return(
        <div className="animal">
            <h3>{id}</h3>
            <p>{nome}</p>
            <p>{raca}</p>
            <p>{idade}</p>
            <p>{vacinado ? "Sim" : "Não"}</p>
            <p>{castrado ? "Sim" : "Não"}</p>
            <button onClick={() => props.handleDelete(id)} className="add-delete-button">-</button>
        </div>
    );
}

export default AdminTableItem;