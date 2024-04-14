import Modal from "../../modal/modal";
import OrderDetails from "../../modal/order-details";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useModal } from '../../hooks/useModal.js';
import styles from './bottom-price.module.css';


function BottomPrice() {

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={`${styles.bottom_price} pr-4`}>

      <span className={`text text_type_digits-medium pl-0 pt-0 pr-10 pb-0`}>
        {'610'}
        <CurrencyIcon type="primary" className="pl-2" />
      </span>

      <>
        <Button htmlType="button" type="primary" size="large" onClick={openModal}>Оформить заказ</Button> 

        {isModalOpen && (
          <Modal isOpen={isModalOpen} handleClose={closeModal} title="">
            <OrderDetails/>
          </Modal>
        )}
      </>

    </div>
  )
}

export default BottomPrice;