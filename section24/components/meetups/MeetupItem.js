import React from 'react';

export default function MeetupItem(props) {
  return (
    <div>
      <div>
        <img src={props.image} alt="image" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.address}</p>
      </div>
      <div>
        <button type="button" id={props.id}>
          Show Details
        </button>
      </div>
    </div>
  );
}
