import React from "react";
import PropTypes from "prop-types";

import { usePreventScroll } from "hooks";

import ModalPortal from "components/common/ModalPortal";

import "./modal.scss";

export default function Modal({ children, onClose }) {
  usePreventScroll();

  return (
    <ModalPortal>
      <div
        onKeyPress={onClose}
        role="button"
        tabIndex="0"
        className="modal__backdrop"
        onClick={onClose}
      />
      {children}
    </ModalPortal>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
