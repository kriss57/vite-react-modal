import React from "react";
import Modal from "./lib";

import { useState } from "react";
import { createPortal } from "react-dom";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFirstBtnClick = () => {
    // Provide the logic you want to perform here
    // for example, an alert box to indicate successful Exit
    alert("Exit!");
    // and closed modal
    setShowModal(false);
  };

  const handleSecondBtnClick = () => {
    // Provide the validation logic you want to perform here
    // for example, an alert box to indicate successful validation
    alert("Validation successful!");
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>open modal</button>
      {showModal &&
        createPortal(
          <Modal
            closeModal={() => setShowModal(false)} // Callback function to close the modal
            theme="success" // Theme of the modal ('validation', 'success', 'success-dark', 'alert', 'error')
            title="Title" // Title of the modal // Optional ! //
            textContent="Your text content!" // Text content of the modal
            modalSize="modal-medium" // Size of the modal ('modal-large' in this case)
            miniBtnActive={true} // Flag indicating whether the mini button is active // true or false
            FirstBtnActive={{
              text: "Close", // Text for the first button
              onFirstBtnClick: handleFirstBtnClick, // Callback function when the first button is clicked
            }}
            DoubleBtnActive={{
              text: "Validation", // Text for the second button
              onSecondBtnClick: handleSecondBtnClick, // Callback function when the second button is clicked
            }}
          />,
          document.body
        )}
    </>
  );
};

export default App;
