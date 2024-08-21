import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modal/order-details";
import { useModal } from '../../hooks/useModal.js';
import styles from './bottom-price.module.css';
import { burgerConstructorSlice } from "../../../../services/constructor/slice";

function BottomPrice() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const bun = useSelector(burgerConstructorSlice.selectors.bun);
  const ingredients = useSelector(burgerConstructorSlice.selectors.ingredients);

  const [orderNumber, setOrderNumber] = useState(null);

  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients.reduce((sum, ingredient) => {
      return ingredient && ingredient.price ? sum + ingredient.price : sum;
    }, 0);
    return bunPrice + ingredientsPrice;
  }, [bun, ingredients]);

  const sendOrder = async (ingredientsIds) => {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: ingredientsIds
        }),
      });
      
      const data = await response.json();

      if (data.success) {
        return data.order.number;
      } else {
        throw new Error('Что-то пошло не так...');
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      return null;
    }
  };

  const handleOrderClick = async () => {
    if (orderNumber) {
      openModal();
    } else {
      const ingredientsIds = [bun?._id, ...ingredients.map(ingredient => ingredient._id)];
      const newOrderNumber = await sendOrder(ingredientsIds);

      if (newOrderNumber) {
        setOrderNumber(newOrderNumber);
        openModal();
      } else {
        console.error('Не удалось оформить заказ');
      }
    }
  };

  return (
    <div className={`${styles.bottom_price} ${'pr-4'}`}>
      <span className={`${styles.span_price} ${'pr-10'}`}>
        <p className={`${'text'} ${'text_type_digits-medium'} ${'pl-0'} ${'pt-0'} ${'pr-2'} ${'pb-0'}`}>
          {totalPrice}
        </p>
        <CurrencyIcon type="primary" className={`${ 'pl-2' }`} />
      </span>

      <>
        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>Оформить заказ</Button> 

        {isModalOpen && (
          <Modal isOpen={isModalOpen} handleClose={closeModal} title="">
            <OrderDetails orderNumber={orderNumber} />
          </Modal>
        )}
      </>
    </div>
  );
}

export default BottomPrice;

