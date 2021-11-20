import React, {useState, useEffect} from 'react'
import './App.css';
import logoIcon from './assets/icons/air-line-logo.svg';
import {dataTrips} from './data/trips'
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
    const [trips, setTrips] = useState(dataTrips);
    const [messageIndex, setMessageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false)

    const handleClickCancel = (index) => {
        let newTrips = [...trips];
        newTrips[index].description.availableSeats += 1
        return setTrips(newTrips)
    }

    const handleClickReserve = (index) => {
        let newTrips = [...trips];
        if(newTrips[index].description.availableSeats === 0){
            return setModalOpen(true);
        }
        newTrips[index].description.availableSeats -= 1
        return setTrips(newTrips)
    }

    useEffect( () => {
        setTimeout(() => {
            if(messageIndex === trips.length - 1){
                return setMessageIndex(0)
            }
            return setMessageIndex((mIndex) => mIndex + 1 )
        },25000)
    }, [messageIndex])

    return (
        <div className="container">
            <div className="header">
                <div style={{backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/home_airline.jpg`})`}}
                     className="background-image">
                    <div className="image-cover">
                        <img className="logo" alt='logo-icon' src={logoIcon}/>
                    </div>
                </div>
                <div className="placard">
                    <p className="placard-text">Proxímo voo Com destino à {trips[messageIndex].description.destination} - saida ás {trips[messageIndex].description.departure} chegada ás {trips[messageIndex].description.arrival}</p>
                </div>
                <div className="trip-container">
                    <div className="trips-container">
                        {trips.length > 0 ?
                            trips.map((trip, index) => {
                                return <Card
                                    key={ Math.random().toString(36).substr(2, 9)}
                                    index={index}
                                    title={trip.title}
                                    img={trip.image}
                                    description={trip.description}
                                    handleClickCancel={handleClickCancel}
                                    handleClickReserve={handleClickReserve}
                                />
                            })
                            :
                            <h1>Estamos sem viagens no momento</h1>
                        }
                    </div>
                </div>
            </div>
            {modalOpen &&
                <Modal close={() => setModalOpen(false)}/>
            }
        </div>
    );
}

export default App;
