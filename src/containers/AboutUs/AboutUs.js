import React from 'react';
import image1 from '../../assets/image-1.jpeg';
import image2 from '../../assets/image-2.jpeg';
import image3 from '../../assets/image-3.jpeg';
import image4 from '../../assets/image-4.jpeg';

const AboutUs = () => {
    return (
        <div className="page about-us">
            <div className="container">
                <h1 className="text-center">Premium class beauty salon "Perfect"</h1>
                <h3 className="text-center">Your dreams will come true with us!</h3>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-4 p-2">
                        <div className="img"
                             style={{
                                 backgroundImage: `url(${image1})`}}>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="img"
                             style={{
                                 backgroundImage: `url(${image2})`}}>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-4 p-2">
                        <div className="img"
                             style={{
                                 backgroundImage: `url(${image3})`}}>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="img"
                             style={{
                                 backgroundImage: `url(${image4})`}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;