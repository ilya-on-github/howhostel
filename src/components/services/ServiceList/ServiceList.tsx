import React, {Component} from "react";
import './ServiceList.scss';
import {Service} from "../../../models/service.model";
import ServiceCard from "../ServiceCard/ServiceCard";

class ServiceList extends Component<{ items: Service[] }> {
    render() {
        const items = this.props.items;

        return (
            <section id="services" className="ServiceList">
                <h1 className="headline">Услуги</h1>
                <ul>{items.map(
                    (s, i) => {
                        return (
                            <li key={i}>
                                <ServiceCard service={s}/>
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default ServiceList;