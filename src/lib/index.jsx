import React, { useEffect, useRef } from "react";

import successPng from "../lib/success.png";
import alertPng from "../lib/exclamation-mark.png";
import errorPng from "../lib/error.png";

import "./style.css";

const Modal = ({
  closeModal,
  theme,
  title,
  textContent,
  modalSize,
  customImage,
  miniBtnActive,
  FirstBtnActive,
  DoubleBtnActive,
}) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  console.log(miniBtnActive);

  useEffect(() => {
    closeButtonRef.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const currentModalRef = modalRef.current;

    if (currentModalRef) {
      currentModalRef.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (currentModalRef) {
        currentModalRef.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [closeModal]);

  let image = null;
  let btnClassname = "";
  let border = "";

  if (DoubleBtnActive) {
    btnClassname = "close-button close-button-validation";
    FirstBtnActive = false;
  }

  if (theme === "success" || theme === "success-dark") {
    image = successPng;
    border = "title-border-success";
    DoubleBtnActive
      ? (btnClassname =
          "close-button close-button-success close-button-doubleBtn-success")
      : (btnClassname = "close-button close-button-success");
  } else if (theme === "alert") {
    image = alertPng;
    border = "title-border-alert";
    DoubleBtnActive
      ? (btnClassname =
          "close-button close-button-alert close-button-doubleBtn-alert")
      : (btnClassname = "close-button close-button-alert");
  } else if (theme === "error") {
    image = errorPng;
    border = "title-border-error";
    DoubleBtnActive
      ? (btnClassname =
          "close-button close-button-error close-button-doubleBtn-error")
      : (btnClassname = "close-button close-button-error");
  } else {
    image = customImage;
    border = "title-border-validation";
  }

  const modalisaTheme = "modalisa-content " + theme + " " + modalSize;
  const modalisaTitle = "modalisa-title " + border;
  const modalisaImageClasses =
    modalSize === "modal-small" ? "modalisa-image" : "modalisa-image-no-title";

  const handleValidation = () => {
    if (typeof DoubleBtnActive.onSecondBtnClick === "function") {
      DoubleBtnActive.onSecondBtnClick();
      closeModal();
    }
  };

  return (
    <>
      <div
        className="modalisa-overlay"
        onClick={closeModal}
        aria-modal="true"
      ></div>
      <div className={modalisaTheme}>
        <div className="header-modalisa" ref={modalRef}>
          {modalSize !== "modal-small" && title && (
            <p className={modalisaTitle}>{title}</p>
          )}
          {image && (
            <img className={modalisaImageClasses} src={image} alt=" " />
          )}
          {/* double button option */}
          <button
            className={`${
              modalSize === "modal-small" ? "modalisa-mini-button" : "hidden"
            } ${!miniBtnActive ? "hidden" : ""}`}
            onClick={closeModal}
            aria-label="Fermer"
            ref={closeButtonRef}
          >
            X
          </button>
        </div>

        {textContent && (
          <p className="modalisa-text-content" aria-label={textContent}>
            {textContent}
          </p>
        )}
        {/* {FirstBtnActive && (<button className={btnClassname} onClick={closeModal} >
                    {FirstBtnActive}
                </button>)} */}
        {modalSize !== "modal-small" && DoubleBtnActive && (
          <div className="double">
            <button
              className={btnClassname}
              onClick={closeModal}
              aria-label="Fermer"
              ref={closeButtonRef}
            >
              close
            </button>
            <button className={btnClassname} onClick={handleValidation}>
              {DoubleBtnActive.text}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
