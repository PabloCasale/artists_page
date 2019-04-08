import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13140.069596462428!2d-58.4205412!3d-34.5784263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b521307d135059a!2sLa+Rural!5e0!3m2!1ses-419!2sar!4v1554722694809!5m2!1ses-419!2sar"
                width="100%"
                height="450px"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>LOCATION</div>
            </div>
        </div>
    );
};

export default Location;