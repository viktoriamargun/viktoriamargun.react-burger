import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modal/order-details";
import { useModal } from '../../hooks/useModal';
import styles from './bottom-price.module.css';
import { burgerConstructorSlice } from "../../../../services/constructor/slice";
import { sendOrder } from '../../../../services/orders/actions';
import { useNavigate } from 'react-router-dom';  
import { useProvideAuth } from '../../../../services/hooks/useAuth';  


function BottomPrice() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { isModalOpen, openModal, closeModal } = useModal();
  const bun = useSelector(burgerConstructorSlice.selectors.bun);
  const ingredients = useSelector(burgerConstructorSlice.selectors.ingredients);

  const [orderNumber, setOrderNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, token } = useProvideAuth();

  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients.reduce((sum, ingredient) => {
      return ingredient && ingredient.price ? sum + ingredient.price : sum;
    }, 0);
    return bunPrice + ingredientsPrice;
  }, [bun, ingredients]);

  const handleOrderClick = async () => {
    console.log('Пользователь:', user);
    console.log('Токен:', token);

    if (!user) {
      navigate('/login');
      return;
    }

    if (isLoading) return; 

    if (orderNumber) {
      openModal();
    } else {
      setIsLoading(true);
      const ingredientsIds = [bun?._id, ...ingredients.map(ingredient => ingredient._id)];
      const resultAction = await dispatch(sendOrder({ ingredientsIds, token })); 

      if (sendOrder.fulfilled.match(resultAction)) {
        setOrderNumber(resultAction.payload);
        openModal();
      } else {
        console.error('Не удалось оформить заказ', resultAction.payload);
      }
      setIsLoading(false); 
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
