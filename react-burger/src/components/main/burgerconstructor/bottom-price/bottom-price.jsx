import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import OrderDetails from "../../modal/order-details";
import { useModal } from '../../hooks/useModal.js';
import styles from './bottom-price.module.css';

// function BottomPrice() {
//   const { isModalOpen, openModal, closeModal } = useModal();
//   const { bun, ingredients } = useSelector(state => state.burgerConstructor);

//   const totalPrice = useMemo(() => {
//     const bunPrice = bun ? bun.price * 2 : 0;
//     const ingredientsPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
//     return bunPrice + ingredientsPrice;
//   }, [bun, ingredients]);
  
//   console.log('Текущие ингредиенты:', ingredients);
//   console.log('Текущая цена:', totalPrice);

//   return (
//     <div className={`${styles.bottom_price} ${'pr-4'}`}>
//       <span className={`${styles.span_price} ${'pr-10'}`}>
//         <p className={`${'text'} ${'text_type_digits-medium'} ${'pl-0'} ${'pt-0'} ${'pr-2'} ${'pb-0'}`}>
//           {totalPrice}
//         </p>
//         <CurrencyIcon type="primary" className={`${ 'pl-2' }`} />
//       </span>

//       <>
//         <Button htmlType="button" type="primary" size="large" onClick={openModal}>Оформить заказ</Button> 

//         {isModalOpen && (
//           <Modal isOpen={isModalOpen} handleClose={closeModal} title="">
//             <OrderDetails/>
//           </Modal>
//         )}
//       </>
//     </div>
//   );
// }

function BottomPrice() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { bun, ingredients } = useSelector(state => state.burgerConstructor);

  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients.reduce((sum, ingredient) => {
      return ingredient && ingredient.price ? sum + ingredient.price : sum;
    }, 0);
    return bunPrice + ingredientsPrice;
  }, [bun, ingredients]);

  console.log('Текущие ингредиенты:', ingredients);
  console.log('Текущая цена:', totalPrice);

  return (
    <div className={`${styles.bottom_price} ${'pr-4'}`}>
      <span className={`${styles.span_price} ${'pr-10'}`}>
        <p className={`${'text'} ${'text_type_digits-medium'} ${'pl-0'} ${'pt-0'} ${'pr-2'} ${'pb-0'}`}>
          {totalPrice}
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
  );
}


export default BottomPrice;
