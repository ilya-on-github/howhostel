import React from "react";
import {TeamMember} from "../../models/team-member.model";
import './Team.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Virtual} from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import WidthContainer from "../WidthContainer/WidthContainer";

SwiperCore.use([Pagination, Virtual]);

const Team = (props: { members: TeamMember[] }) => {
    return (
        <section id="team" className="Team">
            <WidthContainer>
                <h1 className="heading">Наша команда</h1>
                <Swiper tag="section" wrapperTag="ul" pagination={{clickable: true}} slidesPerView="auto" loop={true}>
                    {props.members.map((m, i) => {
                        return (
                            <SwiperSlide key={i} tag="li" virtualIndex={i}>
                                <div className="slide-content">
                                    <div className="photo" style={{backgroundImage: "url(" + m.imageUrl + ")"}}/>
                                    <div className="info">
                                        <h2 className="name">{m.name}</h2>
                                        <div className="role text-subtitle color-accent">{m.role}</div>
                                        <hr className="background-accent"/>
                                        <p className="description text-body">{m.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </WidthContainer>
        </section>
    );
}

export default Team;
