import React from "react";

import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

import './Header.scss';

import bed from '../../assets/images/bed.png';
import doors from '../../assets/images/doors.png';
import NavBarMobile from "../NavBarMobile/NavBarMobile";

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

function Header() {
    const [state, setState] = React.useState({open: false});

    const toggleMenuHandler = (open: boolean) => {
        setState({...state, open: open});
    }

    const toggleDrawerHandler = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, open: open});
    };

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
                <Hidden smUp>
                    <NavBarMobile open={false} onToggle={toggleMenuHandler}/>
                    <Drawer anchor="right" classes={{
                        paper: 'drawer-content-wrapper'
                    }} open={state.open} onClose={toggleDrawerHandler(false)}>
                        <div className="drawer-content">
                            <NavBarMobile open={true} onToggle={toggleMenuHandler}/>
                            <List component="nav">
                                <ListItemLink href="#events">
                                    <ListItemText primary="Мероприятия" />
                                </ListItemLink>
                                <ListItemLink href="#study">
                                    <ListItemText primary="Обучение" />
                                </ListItemLink>
                                <ListItemLink href="#services">
                                    <ListItemText primary="Услуги" />
                                </ListItemLink>
                                <ListItemLink href="#team">
                                    <ListItemText primary="О нас" />
                                </ListItemLink>
                            </List>
                        </div>
                    </Drawer>
                </Hidden>
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

export default Header;
