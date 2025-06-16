import React from 'react';

const ComingSoon: React.FC = () => {
    return (
        <section className="hero-section dark-bg text-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mx-auto text-center">
                        <h1 className="display-1 fw-bold mb-3 floating">
                            Coming <span className="text-danger">Soon...</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;