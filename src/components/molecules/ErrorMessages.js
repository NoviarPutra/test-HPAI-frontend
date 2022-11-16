import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ErrorMessages = ({ isError, errMessage }) => {
  return (
    <ToastContainer className='p-3' position='top-center'>
      <Toast show={isError}>
        <Toast.Header closeButton={false}>
          <strong className='me-auto'>MESSAGE</strong>
        </Toast.Header>
        <Toast.Body>{errMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ErrorMessages;
