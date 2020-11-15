import React from "react";
import {Course} from "../../../models/course.model";
import './CourseCard.scss';

const CourseCard = (props: { course: Course, index: number, onOrder: () => void }) => {
    const course = props.course;
    const index = props.index;

    let titleHighlightClasses = ['title-highlight'];
    if (index % 2 === 0) {
        titleHighlightClasses.push('background-accent');
    } else {
        titleHighlightClasses.push('background-main');
    }

    return (
        <div className="CourseCard background-main-inverted">
            <div className="layer background">
                <div className={titleHighlightClasses.join(' ')}/>
                <div className="title-highlight-cut"/>
            </div>
            <div className="layer content">
                <div className="content-wrapper">
                    <div className="study-type caption color-light">{course.type}</div>
                    <h2 className="course-title">{course.title}</h2>
                    <div className="study-subtitle text-subtitle">
                        {course.subtitle.map((t, i) => {
                            return (
                                <span key={i}
                                      className={t.isHighlighted ? 'color-accent' : ''}>{t.text}{i !== (course.subtitle.length - 1) ? ' ' : ''}</span>
                            );
                        })}
                    </div>
                    <p className="course-description text-body">{course.description}</p>
                    <button onClick={() => props.onOrder()}>Написать</button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
