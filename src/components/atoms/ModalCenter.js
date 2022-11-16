import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalCenter = ({ show, children, onHide, ...rest }) => {
  return (
    <Modal show={show} size='sm' {...rest}>
      <Modal.Body>
        <div className='text-center'>{children}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCenter;
