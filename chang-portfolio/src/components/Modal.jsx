import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ changeModal }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content mt-28">
          <img
            src="newAssets/resume.png"
            alt="Resume"
            width={800}
            height={800}
          />
          <button
            onClick={() => changeModal(false)}
            className="close-modal mr-4 mt-1"
          >
            <AiOutlineClose color="black" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
