import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "components/common/Modal";

import { hideError } from "redux/errors/actions";

export default function ErrorDialog() {
  const { error, isError } = useSelector((state) => ({
    error: state.errors.error,
    isError: state.errors.isError,
  }));

  const dispatch = useDispatch();

  if (!isError) return null;

  return (
    <Modal onClose={() => dispatch(hideError())}>
      <div className="modal">
        <div className="modal__error">
          <div className="modal__titleWrapper"> Ошибка {error?.code}!</div>
          <div className="modal__content">{error?.message}</div>
        </div>
      </div>
    </Modal>
  );
}
