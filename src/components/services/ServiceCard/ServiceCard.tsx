import React from "react";
import './ServiceCard.scss';
import {Service} from "../../../models/service.model";

const ServiceCard = (props: { service: Service, onOrder: () => void }) => {
    const service = props.service;

    return (
        <div className="ServiceCard background-main-inverted">
            <div className="service-image" style={{backgroundImage: "url(" + service.imageUrl + ")"}}/>
            <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description text-body">{service.description}</p>
                <button className="service-link button-link text-link color-accent"
                        onClick={() => props.onOrder()}>Заказать
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;
