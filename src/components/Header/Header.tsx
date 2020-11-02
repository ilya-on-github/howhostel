import React, {Component} from "react";
import './Header.scss';
import logo from '../../assets/logo/How_Hostel.svg';
import bed from '../../assets/images/bed.png';
import doors from '../../assets/images/doors.png';

class Header extends Component {
    render() {
        const pages = [
            {
                title: 'Организация конференций',
            },
            {
                title: 'Создай успешный отель или хостел',
                subtitle: 'Создаем и помогаем',
                description: '10 лет опыта создания и управления малого гостиничного бизнеса',
            },
            {
                title: 'Программы обучения',
            },
        ];

        const currentPageIndex = 1;
        const currentPage = pages[currentPageIndex];

        return (
            <header className="Header color-main">
                <div className="layer background">
                    <div style={{backgroundImage: "url(" + bed + ")"}}/>
                    <div style={{backgroundImage: "url(" + doors + ")"}}/>
                </div>
                <div className="layer content">
                    <div className="nav-bar">
                        <img className="logo" src={logo} width="128" alt="logo"/>
                        <ul className="menu">
                            <li><a href="#events">Мероприятия</a></li>
                            <li><a href="#study">Обучение</a></li>
                            <li><a href="#products">Услуги</a></li>
                            <li><a href="#about">О нас</a></li>
                        </ul>
                    </div>
                    <div className="pages">
                        <div className="wrapper">
                            <div className="page-nav">
                                <button className="page-nav prev"/>
                                <h3 className="page-num">{currentPageIndex}</h3>
                                <button className="page-nav next"/>
                            </div>
                            <h1 className="page-title page-title-current">{currentPage.title}</h1>
                        </div>
                        <div className="wrapper">
                            <h3 className="page-subtitle">{currentPage.subtitle}</h3>
                            <div className="page-description text-body">{currentPage.description}</div>
                            <button className="page-action button-accent">Написать нам</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
