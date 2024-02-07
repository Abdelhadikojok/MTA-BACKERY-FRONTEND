import React from "react";
import loactionLogo from "../../assets/location-logo.svg";
import clockIcon from "../../assets/clock-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import separator from "../../assets/separator.svg";

export default function Location() {
  return (
    <div className="location-section" id="Location">
      <div>
        <div className="special-sections">
          <p>Location & Contact</p>
          <img src={separator} alt="separator" />
        </div>
        <div className="location-description">
          <div className="location-description-topics oppening-time">
            <div className="location-description-topics-header">
              <img src={clockIcon} alt="clock-icon" style={{ width: "25px" }} />
              <p>Opening Time</p>
            </div>
            <span>6.00 am to 4.00 pm</span>
          </div>
          <div className="location-description-topics location-text">
            <div className="location-description-topics-header">
              <img src={loactionLogo} style={{ width: "25px" }} alt="" />
              <p>Location</p>
            </div>
            <span>زغرتا مجدليا - بجانب صيدلية الوهيب</span>
          </div>
          <div className="location-description-topics phone-number">
            <div className="location-description-topics-header">
              <img src={phoneIcon} style={{ width: "25px" }} alt="" />
              <p>Phone Number</p>
            </div>
            <span>
              <a
                href="https://api.whatsapp.com/send?phone=81365357"
                target="_blank"
                style={{ textDecoration: "underline" }}
                rel="noreferrer"
              >
                +961 81365357
              </a>
            </span>
          </div>
        </div>
      </div>
      <iframe
        title="MTA BACKERY Location"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=34.415000,%2035.869500+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps devices</a>
      </iframe>
    </div>
  );
}
