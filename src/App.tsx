import React, {useState} from 'react';
import './App.scss';

import {Event} from './models/event.model';
import {Course} from "./models/course.model";
import {Service} from "./models/service.model";
import {TeamMember} from "./models/team-member.model";
import {Comment} from "./models/comment.model";
import {Phone} from "./models/phone.model";

import EventList from "./components/events/EventList/EventList";
import CourseList from "./components/courses/CourseList/CourseList";
import ServiceList from "./components/services/ServiceList/ServiceList";
import Header from "./components/Header/Header";
import Team from "./components/Team/Team";
import Comments from "./components/Comments/Comments";
import Contacts from "./components/Contacts/Contacts";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

import breakfasts from './assets/images/breakfasts.png';
import conferences from './assets/images/conferences.png';
import lessons from './assets/images/lessons.png';
import streams from './assets/images/streams.png';
import lamp from './assets/images/lamp.png';
import files from './assets/images/files.png';
import keyboard from './assets/images/keyboard.png';
import photo from './assets/images/photo.png';
import auditory from './assets/images/auditory.png';
import team1 from './assets/images/team/burtseva.png';
import team2 from './assets/images/team/levchenko.png';

interface State {
    comments: {
        items: Comment[],
        currentIndex: number,
    },
    contacts: {
        email: string,
        phones: Phone[],
    },
    events: {
        items: Event[],
        currentIndex: number,
    },
    feedbackForm: {
        open: boolean,
    },
    services: {
        items: Service[],
    },
    courses: {
        items: Course[],
    },
    team: {
        members: TeamMember[],
    },
}

const App = () => {
    const initialState: State = {
        comments: {
            items: [
                {
                    name: 'Николай',
                    text: 'Спасибо большое за ваши прямые эфиры, за ваш труд, столько много нового интересного узнал для себя. Продолжайте в том же ключе, вы большие молодцы!',
                    profileUrl: 'https://instagram.com/tunikse?igshid=ojy07wwzzlik'
                },
                {
                    name: 'Юлия',
                    text: 'Супер эфир!!! Спасибо! Всё четко, по делу, структурировано, забрала себе пару полезностей 👍 да и одно удовольствие слушать таких прекрасных девушек ❤ Жду ещё выходов ✌🙂',
                    profileUrl: 'https://instagram.com/zhnova?igshid=18yn1h7bqqueg'
                },
                {
                    name: 'Анастасия',
                    text: 'Очень интересная подача материала,лёгкая и лаконичная,без воды. Много полезного подчеркнула для себя! Спасибо большое за эфир. Жду новых эфиров!😊',
                    profileUrl: 'https://instagram.com/zhnova?igshid=18yn1h7bqqueg'
                }
            ],
            currentIndex: 0
        },
        contacts: {
            email: 'ask@howhostel.com',
            phones: [
                {
                    number: '+79167699247',
                    name: 'Валерия'
                },
                {
                    number: '+79162780772',
                    name: 'Анна'
                },
            ],
        },
        events: {
            items: [
                {
                    type: 'Прямые эфиры',
                    isFree: true,
                    title: 'PRO документы',
                    when: new Date(),
                    linkText: 'Инстаграм',
                    linkUrl: 'https://instagram.com/how.hostel',
                    imageUrl: streams,
                },
                {
                    type: 'Семинары',
                    isFree: true,
                    title: 'PRO документы',
                    when: new Date(),
                    linkText: 'Инстаграм',
                    linkUrl: 'https://instagram.com/how.hostel',
                    imageUrl: lessons,
                },
                {
                    type: 'Конференции',
                    isFree: true,
                    title: 'PRO документы',
                    when: new Date(),
                    linkText: 'Инстаграм',
                    linkUrl: 'https://instagram.com/how.hostel',
                    imageUrl: conferences,
                },
                {
                    type: 'Бизнес-завтраки',
                    isFree: false,
                    title: 'PRO документы',
                    when: new Date(),
                    linkText: 'Инстаграм',
                    linkUrl: 'https://instagram.com/how.hostel',
                    imageUrl: breakfasts,
                },
            ],
            currentIndex: 0
        },
        feedbackForm: {
            open: false,
        },
        courses: {
            items: [
                {
                    title: '21 шаг к открытию успешного отеля',
                    description: 'Задача организации, в особенности же начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
                    subtitle: [
                        {
                            text: 'Первый в России',
                            isHighlighted: true,
                        },
                        {
                            text: 'онлайн марафон',
                        }
                    ],
                    type: 'Марафон',
                },
                {
                    title: 'Профессиональная переподготовка',
                    description: 'Твой шанс получить диплом о профпереподготовке профильного образования в одном из лучшиз ВУЗов страны. Ты научишься: кругу (специалистов) участие в формировании соответствующий условий активизации.',
                    subtitle: [
                        {
                            text: 'Cовместно c',
                        },
                        {
                            text: 'РЭА им. Плеханова',
                            isHighlighted: true
                        }
                    ],
                    type: 'Курсы',
                },
            ]
        },
        services: {
            items: [
                {
                    imageUrl: lamp,
                    title: 'Консультация',
                    description: 'Часовые констультации, консультации перед открытием отеля, консультация с дизайн – планом и бизнес – планом.',
                },
                {
                    imageUrl: files,
                    title: 'Подготовка полного пакета документов',
                    description: 'Помощь в подготовке документов любой сложности. Мы поможем сформировать нужный пакет документов, необходимых для отеля и орагнизации работы. Поможем с документами в МВД, УПГУ, ГКУ москвоская безопасность, пакет документов МИГРЕГ и многое другое.',
                },
                {
                    imageUrl: keyboard,
                    title: 'PSM и Channel manager',
                    description: 'Менеджер каналов для управления площадками продаж, настроим и подключим каналы: Bnovo, Travelline, Hostelinstinct, 1c Hostel, Wubook и многое другое необходимое для орагнизации работы отеля.',
                },
                {
                    imageUrl: photo,
                    title: 'Ведение социальных сетей',
                    description: 'Хочешь привлечь еще больше гостей? Мы поможем сформировать имидж в социальных сетях, создать и наполнить сайт, развить и заполнить данными каналы продаж.',
                },
                {
                    imageUrl: auditory,
                    title: 'Организация конференций и семинаров',
                    description: 'Возмем на себя  организацию конференций и семинаров на любую тематике по всей России. Лучшие спикеры и современные методики.',
                },
            ]
        },
        team: {
            members: [
                {
                    imageUrl: team1,
                    name: 'Анна Бурцева',
                    role: 'Основатель',
                    description: 'Задача организации, в особенности же начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
                },
                {
                    imageUrl: team2,
                    name: 'Валерия Левченко',
                    role: 'Эксперт',
                    description: 'Хочу кофе',
                },
            ],
        },
    };

    const [state, setState] = useState(initialState);

    const toggleFeedbackForm = (open: boolean) => {
        setState({
            ...state,
            feedbackForm: {
                ...state,
                open: open
            }
        });
    };

    return (
        <div className="App">
            <Header onAction={() => toggleFeedbackForm(true)}/>
            <EventList events={state.events.items}/>
            <CourseList courses={state.courses.items} onOrder={(course) => toggleFeedbackForm(true)}/>
            <ServiceList items={state.services.items} onOrder={(service) => toggleFeedbackForm(true)}/>
            <Team members={state.team.members}/>
            <Comments comments={state.comments.items}/>
            <Contacts phones={state.contacts.phones} email={state.contacts.email}
                      onContact={() => toggleFeedbackForm(true)}/>
            <FeedbackForm open={state.feedbackForm.open} onToggle={(open) => toggleFeedbackForm(open)}/>
        </div>
    );
}

export default App;
