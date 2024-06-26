import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types.js';
import Modal from "../../modal/modal";
import IngredientDetails from "../../modal/ingredient-details";
import styles from './card-bun.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useModal } from '../../hooks/useModal';

CardBun.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
};

export default function CardBun({ data }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId, title) => {
    setSelectedItemId(itemId);
    openModal();
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
    closeModal();
  };

  const selectedIngredient = data.find(item => item._id === selectedItemId);

  const mainItems = data?.map(
    (item) => 
      item.type === 'bun' && (
        <article
          key={item._id} 
          className={styles.col_holder} 
          onClick={() => handleItemClick(item._id)}>
          
          <Counter count={1} size="default" extraClass="m-1" />
          
          <div className={`${styles.col_img} ${'pl-4'} ${'pr-4'}`}>
            <img src={item.image_large} alt={item.name} />
          </div>
          
          <div className={`${styles.col_price} ${'pb-1'} ${'pt-1'}`}>
            <p className={`${styles.col_price_p} ${'pr-2'} ${'text'} ${'text_type_digits-small'}`}>{item.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          
          <div className={styles.col_name}>
            <p className={`${styles.col_name_p} ${'text'} ${'text_type_main-default'}`}>{item.name}</p>
          </div>
        </article>
      )
  );
  return <>
  {mainItems}
  <Modal 
    isOpen={isModalOpen} 
    handleClose={handleCloseModal}     
    title={"Детали ингредиента"} >
      
    {selectedIngredient && <IngredientDetails details={selectedIngredient} />}
  </Modal>
  </>;
}