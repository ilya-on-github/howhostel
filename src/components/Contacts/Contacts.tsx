import React, {Component} from "react";
import background from '../../assets/images/contacts-background.png';
import './Contacts.scss';

class Contacts extends Component {
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
                            <ul className="text-body">
                                <li>+79162780772</li>
                                <li>+79166325763</li>
                            </ul>
                            <ul className="text-body">
                                <li>info@mahimo.ru</li>
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
