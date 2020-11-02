import React, {Component} from "react";
import * as e from "../../../models/event.model";
import moment from 'moment';
import './EventCard.scss';
import iconArrowRight from '../../../assets/icons/arrow-right.svg'

class EventCard extends Component<e.Event> {
    render() {
        const props = this.props;

        return (
            <div className="EventCard">
                <div className="event-info">
                    <div className="event-type text-caption">{props.type}</div>
                    {props.isFree
                        ? <div className="event-paid text-caption color-light">Бесплатно</div>
                        : ''}
                    <h4 className="event-title">{props.title}</h4>
                    <div className="event-date text-caption color-light">{moment(props.when).format('lll')}</div>
                    <a className="event-link text-link color-accent" href={props.linkUrl}>
                        <span>{props.linkText}</span>
                        <img className="icon" src={iconArrowRight} alt="icon"/>
                    </a>
                </div>
                <div className="event-image" style={{backgroundImage: "url(" + props.imageUrl + ")"}}/>
            </div>
        );
    }
}

export default EventCard;
