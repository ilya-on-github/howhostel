import React from "react";
import {Event} from "../../../models/event.model";

import './EventCard.scss';

import Moment from 'react-moment';
import 'moment/locale/ru';

import iconArrowRight from '../../../assets/icons/arrow-right.svg'

const EventCard = (props: { event: Event }) => {
    const event = props.event;
    return (
        <div className="EventCard-root">
            <div className="EventCard-info">
                <div className="EventCard-tags">
                    <span className="EventCard-type text-caption">{event.type}</span>
                    {event.isFree
                        ? <span className="EventCard-paid text-caption color-light">Бесплатно</span>
                        : ''}
                </div>
                <h4 className="EventCard-title">{event.title}</h4>
                <div className="EventCard-date text-caption color-light">
                    <Moment locale="ru" date={event.when} format="lll"/>
                </div>
                <p className="EventCard-description">{event.description}</p>
                <a className="EventCard-link text-link color-accent" href={event.linkUrl}>
                    <span>{event.linkText}</span>
                    <img className="icon" src={iconArrowRight} alt="icon"/>
                </a>
            </div>
            <div className="EventCard-image" style={{backgroundImage: "url(" + event.imageUrl + ")"}}/>
        </div>
    );
}

export default EventCard;
