import React from "react";
import "./Posts.css";
import locationIcon from "../../assets/location-icon.svg";

export default function Posts(props) {
  return (
    <section className="post">
      <div className="post-img">
        <img src={props.post.image} alt={props.post.title} />
      </div>
      <div className="post-details">
        <span className="post-location">
          <img src={locationIcon} alt="Location Pin Icon" />
          {props.post.location}
          <a href={props.post.googleMapsUrl} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </span>
        <span className="post-title">
          <h2>{props.post.title}</h2>
        </span>

        <span className="post-more">
          <p className="dates">
            {props.post.startDate} - {props.post.endDate}
          </p>
          <p className="desc">{props.post.description}</p>
        </span>
      </div>
    </section>
  );
}
