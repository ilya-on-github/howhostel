import React, {Component} from "react";
import {Study} from "../../../models/study.model";
import StudyCard from "../StudyCard/StudyCard";
import './StudyList.scss';

class StudyList extends Component<{ items: Study[] }> {
    render() {
        const items = this.props.items;

        return (
            <section id="study" className="StudyList background-main-inverted">
                <h1 className="headline">Обучение</h1>
                <ul>{items.map(
                    (s, i) => {
                        return (
                            <li key={i}>
                                <StudyCard study={s} index={i}/>
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default StudyList;
