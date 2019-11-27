import React from "react";
import {
  Modal,
  Button
} from "react-bootstrap";

type TourModalProps = {
  onHide: () => void 
  header: any
  closeText: string
  show: boolean
}

const TourModal: React.FC<TourModalProps> = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{props.closeText}</Button>
      </Modal.Footer>
    </Modal>
    )
}



export default TourModal;