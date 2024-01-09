import React from "react";
// import ReactDOM from 'react-dom';   
import styles from './bottom-price.module.css';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOffer from '../modal/modal-offer.jsx';

function BottomPrice() {
  const [visible, setVisible] = React.useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  }

  // const handleCloseModal = () => {
  //   setVisible(false);
  // }  

  const modal = <ModalOffer />

  return (
    <div className={`${ styles.bottom_price } ${ 'pr-4' }`}>
      <span className={`${ 'text' } ${ 'text_type_digits-medium' }`} style={{ padding: '0 40px 0 0' }}>
        {'610'}
        <CurrencyIcon type="primary" className={ 'pl-2' } />
      </span>
      <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
      {visible && modal}
    </div>
  )
}

export default BottomPrice;




