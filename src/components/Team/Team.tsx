import React, {Component} from "react";
import {TeamMember} from "../../models/team-member";
import './Team.scss';
import SliderSwitch from "../SliderSwitch/SiderSwitch";

class Team extends Component<{ members: TeamMember[], currentIndex: number }> {
    render() {
        const members = this.props.members;
        const currentIndex = this.props.currentIndex;

        return (
            <section className="Team">
                <h1>Команда</h1>
                <ul className="photo-list">
                    {members.map((m, i) => {
                        return (
                            <li key={i}>
                                <div className="member-photo" style={{backgroundImage: "url(" + m.imageUrl + ")"}}/>
                            </li>
                        );
                    })}
                </ul>
                <SliderSwitch length={members.length} currentIndex={currentIndex}/>
                <ul className="description-list">
                    {members.map((m, i) => {
                        return (
                            <li key={i}>
                                <h2 className="member-name">{m.name}</h2>
                                <div className="member-role text-subtitle color-accent">{m.role}</div>
                                <hr className="background-accent"/>
                                <p className="member-description text-body">{m.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        );
    }
}

export default Team;
