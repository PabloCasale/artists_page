import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5433812532146!2d-84.38796968484358!3d33.77246353986934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5046f76d0c0db%3A0x1a9d789f6178c69e!2sFox+Theatre!5e0!3m2!1ses-419!2sar!4v1556591762457!5m2!1ses-419!2sar"
                width="100%"
                height="450px"
                frameBorder="0"
                title="EventExpo"
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>LOCATION</div>
            </div>
        </div>
    );
};

export default Location;