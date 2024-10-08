import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modal/order-details";
import { useModal } from '../../hooks/useModal';
import { burgerConstructorSlice } from "../../../../services/constructor/slice";
import { sendOrder } from '../../../../services/orders/actions';
import { authSlice } from "../../../../services/auth/authSlice";
import styles from './bottom-price.module.css';

function BottomPrice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();
  const bun = useSelector(burgerConstructorSlice.selectors.bun);
  const ingredients = useSelector(burgerConstructorSlice.selectors.ingredients);

  const [orderNumber, setOrderNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(authSlice.selectors.user);
  const token = useSelector(authSlice.selectors.accessToken);

  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients.reduce((sum, ingredient) => {
      return ingredient && ingredient.price ? sum + ingredient.price : sum;
    }, 0);
    return bunPrice + ingredientsPrice;
  }, [bun, ingredients]);

  const handleOrderClick = async () => {
    if (isLoading) return;
    if (!user) navigate('/login')
    setIsLoading(true);
    const ingredientsIds = [bun?._id, ...ingredients.map(ingredient => ingredient._id)];
    try {
      const resultAction = await dispatch(sendOrder({ ingredientsIds, token }));
      if (sendOrder.fulfilled.match(resultAction)) {
        setOrderNumber(resultAction.payload);
        openModal();
      } else {
        console.error('Не удалось оформить заказ', resultAction.payload);
      }
    } catch (error) {
      console.error('Ошибка при оформлении заказа', error);
    } finally {
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
