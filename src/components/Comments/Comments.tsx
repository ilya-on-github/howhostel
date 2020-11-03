import React, {Component} from "react";
import {Comment} from "../../models/comment.model";
import SwiperCore, {Virtual, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './Comments.scss';

// install modules
SwiperCore.use([Virtual, Pagination]);

class Comments extends Component<{ comments: Comment[] }> {
    render() {
        const comments = this.props.comments;

        return (
            <div className="Comments">
                <Swiper tag="div" wrapperTag="ul"
                        virtual
                        allowTouchMove
                        pagination={{clickable: true}}
                        slidesPerView={1}
                        spaceBetween={50}>

                    {comments.map((c, i) => {
                        return (
                            <SwiperSlide tag="li" key={i} virtualIndex={i}>
                                <div className="slide-content background-main-inverted">
                                    <p className="comment-text text-body">{c.text}</p>
                                    <a className="comment-name text-link color-accent" href={c.profileUrl}>{c.name}</a>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        );
    }
}

export default Comments;
