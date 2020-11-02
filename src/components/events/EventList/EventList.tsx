import React, {Component} from "react";
import {Event} from "../../../models/event.model";
import EventCard from "../EventCard/EventCard";
import './EventList.scss';

class EventList extends Component<{ events: Event[] }> {
    render() {
        const events = this.props.events;

        return (
            <section className="EventList">
                <h1>Мероприятия</h1>
                <ul>{events.map(
                    (e, i) => {
                        return (
                            <li key={i}>
                                <EventCard {...e} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default EventList;
