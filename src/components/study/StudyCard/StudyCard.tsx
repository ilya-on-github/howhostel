import React, {Component} from "react";
import {Study} from "../../../models/study.model";
import './StudyCard.scss';

class StudyCard extends Component<{ study: Study, index: number }> {
    render() {
        const study = this.props.study;
        const index = this.props.index;

        let titleHighlightClasses = ['title-highlight'];
        if (index % 2 === 0) {
            titleHighlightClasses.push('background-accent');
        } else {
            titleHighlightClasses.push('background-main');
        }

        return (
            <div className="StudyCard background-main-inverted">
                <div className="background">
                    <div className={titleHighlightClasses.join(' ')}/>
                    <div className="title-highlight-cut"/>
                </div>
                <div className="study-type caption color-light">{study.type}</div>
                <h2 className="study-title">{study.title}</h2>
                <div className="study-subtitle text-subtitle">
                    {study.subtitle.map((t, i) => {
                        return (
                            <span key={i}
                                  className={t.isHighlighted ? 'color-accent' : ''}>{t.text}{i !== (study.subtitle.length - 1) ? ' ' : ''}</span>
                        );
                    })}
                </div>
                <p className="study-description text-body">{study.description}</p>
                <button>Написать</button>
            </div>
        );
    }
}

export default StudyCard;
