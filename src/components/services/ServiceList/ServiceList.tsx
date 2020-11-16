import React from "react";
import './ServiceList.scss';
import {Service} from "../../../models/service.model";
import ServiceCard from "../ServiceCard/ServiceCard";
import WidthContainer from "../../WidthContainer/WidthContainer";

const ServiceList = (props: { items: Service[], onOrder: (service: Service) => void }) => {
    return (
        <section id="services" className="ServiceList-root">
            <WidthContainer>
                <h1 className="ServiceList-heading">Услуги</h1>
                <ul className="ServiceList-list">{props.items.map(
                    (s, i) => {
                        return (
                            <li className="ServiceList-item" key={i}>
                                <ServiceCard service={s} onOrder={() => props.onOrder(s)}/>
                            </li>
                        );
                    })}
                </ul>
            </WidthContainer>
        </section>
    );
}

export default ServiceList;