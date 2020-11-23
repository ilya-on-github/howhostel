import React, {Component} from "react";
import {Comment} from "../../models/comment.model";
import SwiperCore, {Virtual, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './Comments.scss';
import WidthContainer from "../WidthContainer/WidthContainer";

// install modules
SwiperCore.use([Virtual, Pagination]);

class Comments extends Component<{ comments: Comment[] }> {
    render() {
        const comments = this.props.comments;

        return (
            <section id="comments" className="Comments">
                <WidthContainer>
                    <Swiper tag="div"
                            wrapperTag="ul"
                            allowTouchMove
                            pagination={{clickable: true}}
                            slidesPerView="auto"
                            loop={true}>
                        {comments.map((c, i) => {
                            return (
                                <SwiperSlide tag="li" key={i} virtualIndex={i}>
                                    <div className="slide-content background-main-inverted">
                                        <p className="comment-text text-body">{c.text}</p>
                                        <a className="comment-name text-link color-accent"
                                           href={c.profileUrl}>{c.name}</a>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </WidthContainer>
            </section>
        );
    }
}

export default Comments;
