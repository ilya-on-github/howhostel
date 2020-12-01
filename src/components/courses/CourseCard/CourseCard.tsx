import React, {useState} from "react";
import {Course} from "../../../models/course.model";
import './CourseCard.scss';
import CustomModal from "../../material/CustomModal";

const CourseCard = (props: { course: Course, index: number, onOrder: () => void }) => {
    const course = props.course;
    const [state, setState] = useState({showDetails: false});

    return (
        <div className="CourseCard-root background-main-inverted">
            <div className="CourseCard-type caption color-light">{course.type}</div>
            <h2 className="CourseCard-title">{course.title}</h2>
            <div className="CourseCard-subtitle text-subtitle">
                {course.subtitle.map((t, i) => {
                    return (
                        <span key={i}
                              className={t.isHighlighted ? 'color-accent' : ''}>{t.text}{i !== (course.subtitle.length - 1) ? ' ' : ''}</span>
                    );
                })}
            </div>
            <div className="CourseCard-description">
                <p className="text-body">{course.description}</p>
                {course.details ? <button className="button-link color-accent"
                                          onClick={() => setState({showDetails: true})}>Подробнее</button> : ''}
            </div>
            <button onClick={() => props.onOrder()}>Написать</button>
            {course.details ?
                <CustomModal className="FeedbackForm-root FeedbackForm-modal" open={state.showDetails}
                             onClose={() => setState({showDetails: false})}>
                    {course.details}
                </CustomModal> : ''}
        </div>
    );
}

export default CourseCard;
