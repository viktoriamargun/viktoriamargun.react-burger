import Modal from "../../modal/modal";
import OrderDetails from "../../modal/order-details";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useModal } from '../../hooks/useModal.js';
import styles from './bottom-price.module.css';

function BottomPrice() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={`${styles.bottom_price} ${'pr-4'}`}>

      <span className={`${styles.span_price} ${'pr-10'}`}>
        <p className={`${'text'} ${'text_type_digits-medium'} ${'pl-0'} ${'pt-0'} ${'pr-2'} ${'pb-0'}`}>
          {'0'}
        </p>
        <CurrencyIcon type="primary" className={`${ 'pl-2' }`} />
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