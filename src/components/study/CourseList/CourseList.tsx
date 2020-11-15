import React from "react";
import {Course} from "../../../models/course.model";
import CourseCard from "../CourseCard/CourseCard";
import './CourseList.scss';

const CourseList = (props: { courses: Course[], onOrder: (course: Course) => void }) => {
    const courses = props.courses;

    return (
        <section id="study" className="CourseList background-main-inverted">
            <h1 className="headline">Обучение</h1>
            <ul>{courses.map(
                (c, i) => {
                    return (
                        <li key={i}>
                            <CourseCard course={c} index={i} onOrder={() => props.onOrder(c)}/>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default CourseList;
