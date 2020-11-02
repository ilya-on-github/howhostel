import React, {Component} from "react";
import {Comment} from "../../models/comment";
import SliderSwitch from "../SliderSwitch/SiderSwitch";
import './Comments.scss';

class Comments extends Component<{ comments: Comment[] }> {
    render() {
        const comments = this.props.comments;

        return (
            <div className="Comments">
                <ul className="comment-list">
                    {comments.map((c, i) => {
                        return (
                            <li key={i} className="background-main-inverted">
                                <p className="comment-text text-body">{c.text}</p>
                                <a className="comment-name text-link color-accent" href={c.profileUrl}>{c.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <SliderSwitch length={comments.length} currentIndex={0}/>
            </div>
        );
    }
}

export default Comments;
