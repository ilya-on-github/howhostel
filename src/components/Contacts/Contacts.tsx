import React, {Component} from "react";
import background from '../../assets/images/contacts-background.png';
import './Contacts.scss';
import {Phone} from "../../models/phone.model";

class Contacts extends Component<{ phones: Phone[], email: string }> {
    render() {
        return (
            <div className="Contacts" style={{backgroundImage: "url(" + background + ")"}}>
                <div className="card">
                    <div className="layer">
                        <div className=" background background-main-inverted"/>
                    </div>
                    <div className="layer">
                        <div className="content">
                            <h1>Контакты</h1>
                            <ul className="contacts text-body">
                                {this.props.phones.map((p, i) => {
                                    return (
                                        <li key={i}>
                                            <span className="number">{p.number}</span>
                                            <span className="name">{p.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className="text-body">
                                <li>{this.props.email}</li>
                            </ul>
                            <button className="button-accent">Написать нам</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
