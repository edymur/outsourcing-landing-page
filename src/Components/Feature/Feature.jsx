import React from "react";
import "./Feature.css";
import briefcase from "./../../assets/briefcase.png";
import building from "./../../assets/building.png";
import skyscraper from "./../../assets/skyscraper.png";

const Feature = () => {
  return (
    <>
      <div className="title">
        <b>Jakie firmy odnoszą największe korzyści z outsourcingu?</b>
      </div>
      <div className="features">
        <div className="feature">
          <div className="feature-img">
            <img src={briefcase} alt="teczka" />
          </div>
          <div className="feature-right">
            <p className="feature-description">
              <p className="feature-title">Małe firmy</p>
              Dzięki outsourcingowi możesz zaoszczędzić czas i energię,
              koncentrując się na tym, co najważniejsze.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src={building} alt="budynki" />
          </div>
          <p className="feature-description">
            <p className="feature-title">Średnie firmy</p>
            Outsourcing pozwala średnim firmom usprawnić procesy i zwiększyć
            efektywność, pozostawiając więcej czasu na kluczowe działania
            biznesowe.
          </p>
        </div>

        <div className="feature">
          <div className="feature-img">
            <img src={skyscraper} alt="wieżowiec" />
          </div>
          <p className="feature-description">
            <p className="feature-title">Duże firmy</p>
            Outsourcing pozwala dużym firmom zoptymalizować złożone procesy,
            redukować koszty operacyjne i skupić się na realizacji
            strategicznych celów.
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
