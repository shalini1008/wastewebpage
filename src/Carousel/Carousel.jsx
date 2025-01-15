import React from 'react';
import { Link } from 'react-router-dom';
import './mehak.css';
const Scheduling = () => {
  return (
    <div className="scheduling-container">
      <div className="section">
        <div className="section-content">
          <h2> CONGESTED AREAS</h2>
          <p>
            <strong>Special Garbage Collection Services:</strong> Get access to exclusive waste drop-off points or alternative collectors to ensure your trash is disposed of responsibly.
          </p>
          <p>
            <strong>Quick QR-Based Drop-offs:</strong> Skip the wait and easily verify waste drop-offs at designated locations.
          </p>
          <p>
            <strong>Community Solutions:</strong> Learn about shared disposal systems for your area.
          </p>
          <Link to="/congestedform" className="section-btn">Explore</Link>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h2>NON-CONGESTED AREAS</h2>
          <p>
            <strong>Effortless Scheduling:</strong> Get real-time updates on van schedules to avoid missing garbage pickups.
          </p>
          <p>
            <strong>Enhanced Navigation for Vans:</strong> Share your precise location to help vans find you faster.
          </p>
          <p>
            <strong>Eco-Friendly Tips:</strong> Learn how to segregate waste for quicker and more efficient collection.
          </p>
          <Link to="/noncongestedform" className="section-btn">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
