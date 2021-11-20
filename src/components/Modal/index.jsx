import './styles.css';

const Modal = ({ close }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === 'modalOut') return close();
    };

    return (
        <div className="modal-background" id="modalOut" onClick={handleOutsideClick}>
            <div className="modal-container">
                <h2>Infelismente este voo não possui mais Vaga :(</h2>
                <button style={{marginTop: '3rem'}} id="button-card-trip-Reserve" onClick={close}>Ok</button>
            </div>
        </div>
    );
};

export default Modal;
