import React, {useState} from 'react';
import {nanoid} from "nanoid";

import ServicesListBlock from "../../components/ServicesListBlock/ServicesListBlock";

import cosmetologyImg from '../../assets/Cosmetology.jpeg';
import hairImg from '../../assets/Hair.jpeg';
import nailsImg from '../../assets/Nails.jpeg';

const Services = () => {
    const [services] = useState([
        {
            id:nanoid(),
            name: 'Cosmetology',
            img: cosmetologyImg,
            list: ['Epilation', 'Anti-age programs', 'Face cleaning'],
        },
        {
            id:nanoid(),
            name: 'Hair',
            img:hairImg,
            list: ['Women haircut', 'Men haircut', 'Children haircut', 'Coloring', 'Styling'],
        },
        {
            id:nanoid(),
            name: 'Nails',
            img:nailsImg,
            list: ['Manicure', 'Nail extension', 'Gel polish', 'pedicure'],
        },
    ]);

    return (
        <div className="page">
            <div className="container">
                <h3 className="text-center py-4">Our Services:</h3>
                <div className="d-flex service-items my-5">
                    {services.map(service => (
                        <ServicesListBlock
                            service={service}
                            key={service.id}
                        />
                    ))}
                </div>
                <h4 className="text-center">
                    Don't put it off for a long time.
                </h4>
                <h4 className="text-center pb-5 mb-0">
                    Call us right now to arrange your visit!
                </h4>
            </div>
        </div>
    );
};

export default Services;
