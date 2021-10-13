import React from 'react';
import FlashMessage from './FlashMessage';
import { Alert } from 'react-bootstrap';

export default function FlashDisplay(props) {
  return (
    <FlashMessage>
      <Alert variant={props.type} id="flash-msg">{props.message}</Alert>
    </FlashMessage>
  );
}
