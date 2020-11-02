import React, {Component} from "react";
import './ServiceCard.scss';
import {Service} from "../../../models/service.model";

class ServiceCard extends Component<{ service: Service }> {
    render() {
        const service = this.props.service;

        return (
            <div className="ServiceCard background-main-inverted">
                <div className="service-image" style={{backgroundImage: "url(" + service.imageUrl + ")"}}/>
                <div className="service-content">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-description text-body">{service.description}</p>
                    <a className="service-link text-link color-accent" href="http://howhostel.com">Заказать</a>
                </div>
            </div>
        );
    }
}

export default ServiceCard;
