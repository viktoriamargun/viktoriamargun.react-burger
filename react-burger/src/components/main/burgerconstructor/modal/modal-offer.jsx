import React from "react";
import styles from "./modal-offer.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function ModalOffer() {
  const [setVisible] = React.useState(true);

  const handleCloseModal = () => {
    setVisible(false);
  }

  return (
    <div className={`${ styles.modal} ${ 'pl-20' } ${ 'pt-30' } ${ 'pr-20' } ${ 'pb-30' }`}> 
    <span className={`${ styles.close_icon} ${ 'pt-15' } ${ 'pr-10' }`} onClose={handleCloseModal}><CloseIcon type="secondary" /></span>
      <div className={ styles.id_offer_div }> 
        <p className={`${ styles.id_offer } ${ 'text' } ${ 'text_type_digits-large' }`} >{Math.floor(Math.random() * (99999 - 10000 + 1)) + 99999}</p>
        <p className={`${ styles.id_offer_p } ${ 'pt-8' }`}>идентификатор заказа</p>
      </div>
      <div className={`${ styles.modal_img} ${ 'pt-15' } ${ 'pb-15' }`}>
        <img src='./images/done.svg' alt='done' />
      </div>
      <div className={ styles.info_offer_div }>
        <p className={ styles.info_offer_p1 }>Ваш заказ начали готовить</p>
        <p className={`${ styles.info_offer_p2} ${ 'pt-2' }`}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </div>
    )
  }
export default ModalOffer;