import React, {useState} from 'react';
import {nanoid} from "nanoid";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [listItems] = useState([
        {name: 'About us', id: nanoid(), route: '/about'},
        {name: 'Services', id: nanoid(), route: '/services'},
        {name: 'Contacts', id: nanoid(), route: '/contacts'},
    ]);

    return (
        <header>
            <div className="d-flex justify-content-between container">
                <NavLink
                    to='/'
                    className="logo text-white text-decoration-none px-2"
                >
                    <b>~Perfect~</b>
                </NavLink>
                <ul className="px-0 align-self-center m-0">
                    {listItems.map(item => (
                        <li key={item.id} className="d-inline px-3">
                            <NavLink
                                to={item.route}
                                className="text-uppercase text-decoration-none nav-item"
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;