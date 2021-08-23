import React from 'react';

const ServicesListBlock = ({service}) => {
    return (
        <div className="col-4 px-2">
            <div className="card">
                <div className="img" style={{
                    backgroundImage: `url(${service.img})`}} />
                <div className="card-body">
                    <h5 className="pt-2">{service.name}</h5>
                    <ul>
                        {service.list.map(item => (
                            <li key={service.id + '-'+ item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServicesListBlock;