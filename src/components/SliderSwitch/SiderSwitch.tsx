import React, {Component} from "react";
import './SliderSwtich.scss';

class SliderSwitch extends Component<{ length: number, currentIndex: number }> {
    render() {
        const indexes = [];
        const length = this.props.length;
        for (let i = 0; i < length; i++) {
            indexes.push(i);
        }

        return (
            <ul className="SliderSwitch">
                {indexes.map(i => {
                    return (
                        <li key={i}>
                            <button className="switch"/>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default SliderSwitch;
