import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './TugModal.scss';

class TugModal extends React.Component {
  static propTypes = {
    createTugForm: PropTypes.func,
  }

  modalEvent = () => {
    const { toggleModal } = this.props;
    toggleModal();
  }

  render() {
    const { modal, createTugForm } = this.props;
    return (
      <div className='TugModal container mt-4 mb-4 w-95'>
          <Modal isOpen={modal} toggle={this.modalEvent} className="Modal">
            <ModalHeader toggle={this.modalEvent}>Add New Tug</ModalHeader>
            <ModalBody>
              {createTugForm}
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

export default TugModal;
