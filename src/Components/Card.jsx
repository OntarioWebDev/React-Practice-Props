import React from "react";
import './Card.css'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props){
    return ( 
        <div className="card">
            <section className="coverImg-section">
                <img src={`/images/${props.item.img}`} className="coverImg" />
            </section>
            <section className="details">
                <div className="location-section">
                    <FontAwesomeIcon icon={faLocationDot} id='fa-icon' />
                    <p className="location spaceLetters">{(props.item.location).toUpperCase()}</p>
                    <a href={props.item.googleMapsUrl} id='map-url'>View on Google Maps</a>
                </div>
                <div className="description-section">
                    <h2>{props.item.title}</h2>
                    <p className="date">{props.item.startDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>
            </section>
        </div>
    )
}