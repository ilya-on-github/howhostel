import React from "react";
import {Course} from "../../../models/course.model";
import CourseCard from "../CourseCard/CourseCard";
import './CourseList.scss';
import WidthContainer from "../../WidthContainer/WidthContainer";

const CourseList = (props: { courses: Course[], onOrder: (course: Course) => void }) => {
    const courses = props.courses;

    return (
        <section id="study" className="CourseList-root background-main-inverted">
            <WidthContainer>
                <h1 className="CourseList-heading">Обучение</h1>
                <ul className="CourseList-list">{courses.map(
                    (c, i) => {
                        return (
                            <li className="CourseList-item" key={i}>
                                <CourseCard course={c} index={i} onOrder={() => props.onOrder(c)}/>
                            </li>
                        );
                    })}
                </ul>
            </WidthContainer>
        </section>
    );
}

export default CourseList;
