
import React from 'react';

import './About.css';
import avatar from '../../images/avatar.jpg';

function About(props) {
    return (
        <section className="about">
            <img className="about__avatar" src={avatar} alt="Фото" />
            <div className="about__container">
                <p className="about__subtitle">Об авторе</p>
                <p className="about__paragraph">
                    Меня зовут Алексей Сломяновский, вы видите мой выпускной проект Яндекс.Практикума.
                    Стэк проекта: HTML, CSS, JS, React, NodeJS.
                </p>
                <p className="about__paragraph">
                    В данной работе представлено взаимодействие фронта и бэка, на примере SPA.
                </p>
            </div>
        </section>
    )
}

export default About;
