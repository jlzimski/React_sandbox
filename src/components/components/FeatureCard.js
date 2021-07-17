import React from 'react';

const FeatureCard = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <div id="featurecard" class="card text-center col-md-6 offset-md-3">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                            <button type="button" class="btn btn btn-primary" disabled>Primary button</button>
                            <button type="button" class="btn btn-secondary" disabled>Button</button>
                        </div>
                        <br />
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary" type="button">Button</button>
                        </div>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">Button</button>
            </div>
        </div>
    );
};

export default FeatureCard;