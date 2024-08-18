import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import { constructorType } from '../../utils/types.js';
import styles from './main-element.module.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../../services/ingredients/item-types.js';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, selectIngredientsCount, moveIngredient, removeIngredient } from '../../../../services/constructor/burgerconstructor-slice.js';
import SortableElement from './sortable-element.jsx';

MainElement.propTypes = {
  items: PropTypes.arrayOf(constructorType).isRequired,
};

function MainElement({ items }) {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burgerConstructor.ingredients);
  const ingredientsCount = useSelector(selectIngredientsCount);

  const findCard = (id) => {
    const card = ingredients.find((c) => c._id === id);
    return {
      card,
      index: ingredients.indexOf(card),
    };
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [ItemTypes.INGREDIENT_MAIN, ItemTypes.INGREDIENT_SAUCE],
    drop: (item) => dispatch(addIngredient(item)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const listHeight = ingredientsCount > 1 
    ? { height: 'auto', maxHeight: '350px' }
    : { height: '80px' };

  const isActive = canDrop && isOver;
  const classes = classNames(styles.main_constructor_element, {
    [styles.isActive]: isActive,
    [styles.canDrop]: canDrop,
  });

const moveCardHandler = useCallback((dragIndex, hoverIndex) => {
  if (dragIndex !== hoverIndex) {
    dispatch(moveIngredient({ dragIndex, hoverIndex }));
  }
}, [dispatch]);


  const handleRemove = (id) => {
    dispatch(removeIngredient(id));
  };

  return (
    <ul className={`${styles.main_scr} custom-scroll`} style={listHeight} ref={drop}>
      {ingredients.length > 0 ? (
        ingredients.map((item, index) => (
          <SortableElement
            key={item._id}
            item={item}
            index={index}
            moveCard={moveCardHandler}
            findCard={findCard}
            onRemove={() => handleRemove(item._id)}          
          />
        ))
      ) : (
        <div className={classes}>
          <p className={styles.p_constructor_element}>
            {isActive ? 'Отпустите, чтобы добавить' : 'Выберите начинку'}
          </p>
        </div>
      )}
    </ul>
  );
}

export default MainElement;
