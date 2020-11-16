import React from "react";
import './ServiceCard.scss';
import {Service} from "../../../models/service.model";

const ServiceCard = (props: { service: Service, onOrder: () => void }) => {
    const service = props.service;

    return (
        <div className="ServiceCard-root background-main-inverted">
            <div className="ServiceCard-image" style={{backgroundImage: "url(" + service.imageUrl + ")"}}/>
            <div className="ServiceCard-content">
                <h2 className="ServiceCard-title">{service.title}</h2>
                <p className="ServiceCard-description text-body">{service.description}</p>
                <button className="ServiceCard-link button-link text-link color-accent"
                        onClick={() => props.onOrder()}>Заказать
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;
