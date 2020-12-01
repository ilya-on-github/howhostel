import React from 'react';
import Money from "../../Money/Money";


const Coaching = () => {
    return (
        <React.Fragment>
            <p>
                <span className="text-subtitle">Количество участников: </span>
                <span>от 5 до 15 человек</span>
            </p>
            <p>
                <span className="text-subtitle">Место: </span>
                <span>тренинг выездной и проводится в удобном для вас месте</span>
            </p>
            <p>
                <span className="text-subtitle">Время: </span>
                <span>2 дня по 3 часа с кофе-брейками</span>
            </p>
            <p>
                <span className="text-subtitle">Тренеры: </span>
                <span>Анна Бурцева, Екатерина Слотюк</span>
            </p>
            <section style={{
                margin: '3rem 0'
            }}>
                <span className="text-subtitle">Стоимость</span>
                <p>Базовый курс: <Money value={50000}/>.</p>
                <p>Анкетирование и тестирование персонала, а также предварительная консультация лидера бесплатно!</p>
                <p>Дополнительные блоки по 2 часа стоимостью <Money value={10000}/> за 1 блок:</p>
                <ol>
                    <li>Организация работы администратора (миграционный учет и правила оказания гостиничных услуг).</li>
                    <li>Стресс-менеджмент (сложные клиенты).</li>
                    <li>Лидер команды сегодня.</li>
                    <li>Конфликт - это подарок (урегулирование конфликтов в коллективе и с клиентами).</li>
                </ol>
                <p className="color-accent">В декабре 2020 года акция - скидка на программу до 40%!</p>
            </section>
            <p>
                {/*Для развития софт скиллз лидера и его команды придумали коучинг. Он пришел из спортивной*/}
                {/*психологии, где для достижения высокого результата тренер особым образом мотивировал*/}
                {/*спортсмена, раскрывая его сильные качества, скрытые ресурсы и внутренний потенциал.*/}
                Командный коучинг - это партнерское сопровождение необходимых изменений в организации,
                выстраивание процессов на новом качественном уровне. В отличие от обычного тимбилдинга,
                коучинг работает на более глубинном уровне, он помогает выстраивать отношения в команде на
                уровне общих ценностей и целей. Чтобы человек захотел поддержать изменения, включиться в
                рабочие процессы на 100%, меняться, расти и развиваться вместе с командой, он должен
                прочувствовать, что ему это необходимо, важно, ценно.
            </p>
        </React.Fragment>
    );
}

export default Coaching;