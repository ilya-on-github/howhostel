import React, {Component} from "react";
import {Comment} from "../../models/comment.model";
import CarouselSwitch from "../CarouselSwitch/CarouselSwitch";
import './Comments.scss';

class Comments extends Component<{ comments: Comment[], currentIndex: number, indexChanged: (i: number) => void }> {
    render() {
        const comments = this.props.comments;
        const indexChangedHandler = (i: number) => {
            this.props.indexChanged(i);
        }

        return (
            <div className="Comments">
                <ul className="comment-list">
                    {comments.map((c, i) => {
                        if (i === this.props.currentIndex) {
                            return (
                                <li key={i} className="background-main-inverted">
                                    <p className="comment-text text-body">{c.text}</p>
                                    <a className="comment-name text-link color-accent" href={c.profileUrl}>{c.name}</a>
                                </li>
                            );
                        }

                        return '';
                    })}
                </ul>
                <CarouselSwitch length={comments.length} currentIndex={this.props.currentIndex}
                                indexChanged={indexChangedHandler}/>
            </div>
        );
    }
}

export default Comments;
