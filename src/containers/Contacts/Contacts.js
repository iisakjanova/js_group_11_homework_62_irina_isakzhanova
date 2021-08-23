import React, {useState} from 'react';
import {nanoid} from "nanoid";

import interiorImg from '../../assets/contacts-pic.jpeg';

const Contacts = () => {
    const [contacts] = useState([
        {id: nanoid(), title: 'Address', text: 'Bishkek, ul. Abdrakhmanova, 123',},
        {id: nanoid(), title: 'Phone', text: '0 777 777 777',},
        {id: nanoid(), title: 'Email', text: 'perfect@gmail.com',},
        {id: nanoid(), title: 'Instagram', text: '@perfect_kg',},
        {id: nanoid(), title: 'Facebook', text: `Premium class beauty salon "Perfect"`,},
    ]);

    return (
        <div className="page contacts">
            <div className="container">
                <h3 className="text-center pt-5">Contact us:</h3>
                <ul className="list-unstyled my-5 mx-auto">
                    {contacts.map(contact => (
                        <li key={contact.id}>
                            <b>{contact.title}:</b> {contact.text}
                        </li>
                    ))}
                </ul>
                <div className="img col-8 mx-auto mb-3" style={{
                    backgroundImage: `url(${interiorImg})`}} />
                <p className="mb-0 mx-auto">
                    From 8.00 a.m. till 20.00 everyday.
                </p>
                <p className="mb-0 mx-auto pb-3">
                    We are glad to see you in the best place in the world!
                </p>
            </div>
        </div>
    );
};

export default Contacts;