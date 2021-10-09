import { Component } from 'react';
import { Modal } from 'react-bootstrap';

class DetailsModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal}>
        <Modal.Header id="update-modal-header" onClick={this.props.toggleModal} closeButton>
          <h2>Recipe Details</h2>
        </Modal.Header>
        <Modal.Body id="update-modal-body">

        </Modal.Body>
        <Modal.Footer id="update-modal-footer">
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DetailsModal;
