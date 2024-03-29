import React from 'react';
import MeetupItem from './MeetupItem';

export default function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}
