import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showpopup, setShowPopup] = useState(false);

  function handleOpenPopup() {
    setShowPopup(!showpopup);
  }

  function onClose() {
    setShowPopup(false);
  }
  return (
    <div>
      <button onClick={handleOpenPopup}>Open Modal popup</button>
      {showpopup && (
        <Modal
          onClose={onClose}
          header={<h2>Hello bro, this is header</h2>}
          body={<h3>I am body part mate</h3>}
          footer={<h1 style={{ color: "red" }}>Hello Footer</h1>}
        />
      )}
    </div>
  );
}
