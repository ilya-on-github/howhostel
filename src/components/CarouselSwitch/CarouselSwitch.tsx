import React, {Component} from "react";
import './CarouselSwtich.scss';

class CarouselSwitch extends Component<{ length: number, currentIndex: number, indexChanged: (i: number) => void }> {
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
                            <button className="switch" onClick={() => {
                                if (i !== this.props.currentIndex) {
                                    this.props.indexChanged(i);
                                }
                            }}>
                                <div
                                    className={"circle " + (i === this.props.currentIndex ? "background-accent" : "background-main")}/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default CarouselSwitch;
