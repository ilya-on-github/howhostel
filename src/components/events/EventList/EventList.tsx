import React from "react";
import {Event} from "../../../models/event.model";
import EventCard from "../EventCard/EventCard";
import './EventList.scss';
import WidthContainer from "../../WidthContainer/WidthContainer";

const EventList = (props: { events: Event[] }) => {
    const events = props.events;

    return (
        <section id="events" className="EventList-root">
            <WidthContainer>
                <h1 className="EventList-heading">Мероприятия</h1>
                <ul className="EventList-list">{events.map(
                    (e, i) => {
                        return (
                            <li className="EventList-item" key={i}>
                                <EventCard event={e}/>
                            </li>
                        );
                    })}
                </ul>
            </WidthContainer>
        </section>
    );
}

export default EventList;
