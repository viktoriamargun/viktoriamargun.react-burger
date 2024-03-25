import styles from "./modal-overlay.module.css";

function ModalOverlay({ handleClose }) {
  const handleOverlayClick = () => {
    handleClose();
  }
  return (   
    <div className={ styles.modal_overlay } onClick={handleOverlayClick}>
      {/* {children} */}
    </div>   
    );
  };
export default ModalOverlay;