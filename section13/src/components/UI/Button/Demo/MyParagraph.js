import React from 'react';

export default function MyParagraph(props) {
  console.log('MyParagraph Demo out');
  return <p>{props.children}</p>;
}
