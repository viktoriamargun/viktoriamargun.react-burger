import { useState } from "react";
import Modal from "../../modal/modal";
import OrderDetails from "../../modal/order-details";

import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './bottom-price.module.css';

function BottomPrice({ openModal, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
    openModal();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${ styles.bottom_price } ${ 'pr-4' }`}>

      <span className={`${ 'text' } ${ 'text_type_digits-medium' }`} style={{ padding: '0 40px 0 0' }}>
        {'610'}
        <CurrencyIcon type="primary" className={ 'pl-2' } />
      </span>

      <>
        <Button htmlType="button" type="primary" size="large" onClick={handleButtonClick}>Оформить заказ</Button> 

        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <OrderDetails/>
        </Modal>
      </>

    </div>
  )
}

export default BottomPrice;