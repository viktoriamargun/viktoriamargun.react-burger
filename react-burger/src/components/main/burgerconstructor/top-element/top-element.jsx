import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './top-element.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../../../services/ingredients/item-types.js';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addBun } from '../../../../services/constructor/burgerconstructor-slice.js';
import { decrementIngredient, incrementIngredient } from '../../../../services/constructor/ingredients-slice.js';

TopElement.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function TopElement() {
  const dispatch = useDispatch();
  const bun = useSelector(state => state.burgerConstructor.bun);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT_BUN,
    drop: (item) => {
      if (bun) {
        dispatch(incrementIngredient(bun._id));
      }
      dispatch(addBun(item));
      dispatch(decrementIngredient(item._id));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  const classes = classNames(styles.top_constructor_element, {
    [styles.isActive]: isActive,
    [styles.canDrop]: canDrop,
  });

  return (
    <div className={styles.top_element_div}>
      <div className={classes} ref={drop}>
        {bun ? (
          <ConstructorElement
            isLocked={true}
            type='top'
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />          
        ) : (
          <p className={styles.p_constructor_element}>
            {isActive ? 'Отпустите, чтобы добавить' : 'Выберите булки'}
          </p>
        )}
      </div>
    </div>
  );
}

export default TopElement;