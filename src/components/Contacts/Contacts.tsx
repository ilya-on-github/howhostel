import React from "react";
import background from '../../assets/images/contacts-background.png';
import './Contacts.scss';
import {Phone} from "../../models/phone.model";

const Contacts = (props: { phones: Phone[], email: string, onContact: () => void }) => {

    return (
        <section id="contacts" className="Contacts" style={{backgroundImage: "url(" + background + ")"}}>
            <div className="card">
                <div className="layer">
                    <div className=" background background-main-inverted"/>
                </div>
                <div className="layer">
                    <div className="content">
                        <h1>Контакты</h1>
                        <ul className="contacts text-body">
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
                        <ul className="text-body">
                            <li>
                                <a className="text-link color-accent"
                                   href={"mailto:" + props.email}>{props.email}</a>
                            </li>
                        </ul>
                        <button className="button-accent" onClick={() => props.onContact()}>Написать нам</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
