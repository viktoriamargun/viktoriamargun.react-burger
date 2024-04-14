import React, { useState, memo } from "react";
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types.js';
import Modal from "../../modal/modal";
import IngredientDetails from "../../modal/ingredient-details";
import styles from './card-sauce.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useModal } from '../../hooks/useModal';
//-----------------------------------------------------------------------------------------------
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../../services/ingredients/item-types.js';// Создайте файл ItemTypes.js и определите типы элементов

export default memo(function CardSauce({ data }) {
  CardSauce.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
  };
  // ------------------------------------------------------------------------
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.INGREDIENT_SAUCE,
    item: { data },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {

        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  // const opacity = isDragging ? 0.4 : 1
  // ------------------------------------------------------------------------

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
      item.type === 'sauce' && (
        <article
        ref={drag}
        draggable={true}

         key={item._id} 
         className={styles.col_holder}
         onClick={() => handleItemClick(item._id)} >
          
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
});