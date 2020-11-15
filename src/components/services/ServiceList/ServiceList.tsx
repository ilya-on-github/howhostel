import React, {Component} from "react";
import './ServiceList.scss';
import {Service} from "../../../models/service.model";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceList = (props: { items: Service[], onOrder: (service: Service) => void }) => {
    return (
        <section id="services" className="ServiceList">
            <h1 className="headline">Услуги</h1>
            <ul>{props.items.map(
                (s, i) => {
                    return (
                        <li key={i}>
                            <ServiceCard service={s} onOrder={() => props.onOrder(s)}/>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default ServiceList;