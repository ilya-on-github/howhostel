import React from "react";
import {Event} from "../../../models/event.model";

import './EventCard.scss';

import Moment from 'react-moment';
import 'moment/locale/ru';

import iconArrowRight from '../../../assets/icons/arrow-right.svg'

const EventCard = (props: { event: Event }) => {
    const event = props.event;
    return (
        <div className="EventCard">
            <div className="event-info">
                <div className="event-type text-caption">{event.type}</div>
                {event.isFree
                    ? <div className="event-paid text-caption color-light">Бесплатно</div>
                    : ''}
                <h4 className="event-title">{event.title}</h4>
                <div className="event-date text-caption color-light">
                    <Moment locale="ru" date={event.when} format="lll"/>
                </div>
                <a className="event-link text-link color-accent" href={event.linkUrl}>
                    <span>{event.linkText}</span>
                    <img className="icon" src={iconArrowRight} alt="icon"/>
                </a>
            </div>
            <div className="event-image" style={{backgroundImage: "url(" + event.imageUrl + ")"}}/>
        </div>
    );
}

export default EventCard;
