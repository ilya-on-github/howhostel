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
import team3 from './assets/images/team/Rectangle_36.png';
import team4 from './assets/images/team/Rectangle_39.png';
import team5 from './assets/images/team/Rectangle_102.png';
import team6 from './assets/images/team/Rectangle_103.png';

import contactsBackground1 from './assets/images/contacts/background_1.png';
import contactsBackground2 from './assets/images/contacts/background_2.png';
import contactsBackground3 from './assets/images/contacts/background_3.png';
import contactsBackground4 from './assets/images/contacts/background_4.png';
import Coaching from "./components/courses/details/Coaching";

interface State {
    comments: {
        items: Comment[],
        currentIndex: number,
    },
    contacts: {
        email: string,
        phones: Phone[],
        background: string,
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

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const App = () => {
    const backgrounds = [contactsBackground1, contactsBackground2, contactsBackground3, contactsBackground4];
    const background = backgrounds[getRandomInt(0, backgrounds.length)];

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
            background: background,
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
                    type: 'Марафон',
                    title: 'Проект "Бизнес-отель"',
                    subtitle: [
                        {
                            text: 'Первый в России',
                        },
                        {
                            text: 'онлайн марафон',
                            isHighlighted: true,
                        }
                    ],
                    description: 'Твой личный способ обучения в формате марафона. Каждый день новая информация, ' +
                        'интересные кейсы, домашние задания и качественная обратная связь. Если ты хочешь открыть ' +
                        'средство размещения или уже столкнулся с первыми "А как это работает?"',
                },
                {
                    type: 'Курс',
                    title: 'Курс "Dream Team"',
                    subtitle: [
                        {
                            text: 'Командный коучинг',
                            isHighlighted: true,
                        },
                        {
                            text: 'для отелей',
                        }
                    ],
                    description: 'Командный коучинг для отелей. Специальный авторский курс фасилитации команды для ' +
                        'сферы hospitality. За 2 дня вы создадите свою команду с нуля, отработаете ролевые кейсы на ' +
                        'примере отеля, повысите мотивацию и эффективность работы своих сотрудников.\n' +
                        'Курс предназначен для собственников/управляющих средств размещения и их сотрудников. ',
                    details: Coaching()
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
                {
                    imageUrl: team3,
                    name: 'Валерия Левченко',
                    role: 'Эксперт',
                    description: 'Хочу кофе',
                },
                {
                    imageUrl: team4,
                    name: 'Валерия Левченко',
                    role: 'Эксперт',
                    description: 'Хочу кофе',
                },
                {
                    imageUrl: team5,
                    name: 'Валерия Левченко',
                    role: 'Эксперт',
                    description: 'Хочу кофе',
                },
                {
                    imageUrl: team6,
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
            <Contacts phones={state.contacts.phones} email={state.contacts.email} background={state.contacts.background}
                      onContact={() => toggleFeedbackForm(true)}/>
            <FeedbackForm open={state.feedbackForm.open} onToggle={(open) => toggleFeedbackForm(open)}/>
        </div>
    );
}

export default App;
