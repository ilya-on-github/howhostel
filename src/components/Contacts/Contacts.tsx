import React from "react";
import './Contacts.scss';

import {Phone} from "../../models/phone.model";

import WidthContainer from "../WidthContainer/WidthContainer";

const Contacts = (props: { phones: Phone[], email: string, background: string, onContact: () => void }) => {
    return (
        <section id="contacts" className="Contacts" style={{backgroundImage: "url(" + props.background + ")"}}>
            <WidthContainer>
                <div className="card">
                    <h1>Контакты</h1>
                    <ul className="phones text-body">
                        {props.phones.map((p, i) => {
                            return (
                                <li key={i}>
                                    <a className="number text-link color-accent"
                                       href={"tel:" + p.number}>{p.number}</a>
                                    <span className="name">{p.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="emails text-body">
                        <li>
                            <a className="text-link color-accent"
                               href={"mailto:" + props.email}>{props.email}</a>
                        </li>
                    </ul>
                    <button className="button-accent" onClick={() => props.onContact()}>Написать нам</button>
                </div>
            </WidthContainer>
        </section>
    );
}

export default Contacts;
