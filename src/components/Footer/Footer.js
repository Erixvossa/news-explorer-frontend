import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import github from '../../images/github.svg';
import vk from '../../images/vk.svg';

function Footer(props) {
    return (
        <footer className="footer">
            <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
            <ul className="footer__container">
                <div className="footer__links">
                    <li>
                        <Link className="footer__main-link" to="/" onClick={props.setMainPageActive}>Главная</Link>
                    </li>
                    <li>
                        <a className="footer__praktikum-link" href="https://praktikum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                    </li>
                </div>
                <li className="footer__icon">
                    <a className="footer__icon-link" href="https://github.com/Erixvossa" target="_blank" rel="noopener noreferrer">
                        <img className="footer__icon-image" src={github} alt="Github Icon" />
                    </a>
                </li>
                <li className="footer__icon">
                    <a className="footer__icon-link" href="https://vk.com/erixvossa" target="_blank" rel="noopener noreferrer">
                        <img className="footer__icon-image" src={vk} alt="VK Icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
