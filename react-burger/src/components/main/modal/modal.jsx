import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal({ isOpen, handleClose, children, title }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    (
    <ModalOverlay>
      <div className={`${ styles.modal} ${ 'pl-0' } ${ 'pt-0' } ${ 'pr-0' } ${ 'pb-0' }`}>
        <div className={`${ styles.modal_header}  ${ 'pl-10' } ${ 'pt-10' } ${ 'pr-10' } ${ 'pb-0' }`}>
          <div className={ styles.modal_header_h1 }>            
            <h1 className={` ${ 'text' } ${ 'text_type_main-large' }` } style={{ padding: '0 0 0 0' }}>{title}</h1>          
          </div>
          <div className={ styles.modal_header_span }>
            <span className={`${ styles.close_icon} ${ 'pt-0' } ${ 'pr-0' }`}  onClick={handleClose}>
              <CloseIcon type="secondary"/>
            </span> 
          </div>                   
        </div>  

        <div className={ styles.modal_content }>
          {children}
        </div>
      </div>
    </ModalOverlay>  
    ),
    document.getElementById("react-modals")
  );
}
export default Modal;
