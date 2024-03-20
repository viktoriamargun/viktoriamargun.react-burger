import styles from "./modal-overlay.module.css";

function ModalOverlay({ children}) {
  return (   
    <div className={ styles.modal_overlay }>
      {children}
    </div>   
    );
  };
export default ModalOverlay;