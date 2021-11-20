const Card = ({index, img, title, description, handleClickCancel, handleClickReserve}) => {
    return(
        <div className="card-container">
            <div className="card-image-container">
                <img alt={`card-trip-${index}`} className="image-trip" src={img}/>
            </div>
            <div className="card-container-description">
                <h1>{title}</h1>
                <div id="card-description">
                    <p>Origem: {description.origin}</p>
                    <p>Destino: {description.destination}</p>
                    <p>Saída: {description.departure}</p>
                    <p>Chegada: {description.arrival}</p>
                    <p>Lugares disponíveis: {description.availableSeats}</p>
                </div>
            </div>
            <div className="card-button-group">
                <button id="button-card-trip-cancel" onClick={() => handleClickCancel(index)}>
                    Cancelar
                </button>
                <button id="button-card-trip-Reserve" onClick={() => handleClickReserve(index)}>
                    Reservar
                </button>
            </div>
        </div>
    )
};

export default Card;
