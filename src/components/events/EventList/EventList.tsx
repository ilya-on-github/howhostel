import React from "react";
import {Event} from "../../../models/event.model";
import EventCard from "../EventCard/EventCard";
import './EventList.scss';

const EventList = (props: { events: Event[] }) => {
    const events = props.events;

    return (
        <section id="events" className="EventList">
            <h1>Мероприятия</h1>
            <ul>{events.map(
                (e, i) => {
                    return (
                        <li key={i}>
                            <EventCard event={e}/>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default EventList;
