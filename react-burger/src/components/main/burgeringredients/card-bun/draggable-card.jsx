import React from "react";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../../services/ingredients/item-types.js';
import styles from './card-bun.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from 'react-redux';

function DraggableCard({ data, onClick }) {
  // const constructorIngredients = useSelector(state => state.burgerConstructor);
  // const bunCount = constructorIngredients.bun ? (constructorIngredients.bun._id === data._id ? 2 : 0) : 0;
  const ingredients = useSelector(state => state.ingredients_count);
  const ingredientCount = ingredients[data._id]?.count || 0;

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.INGREDIENT_BUN,
    item: { ...data },

    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {  
          if (item) {
              console.log(`You dropped ${item._id} into ${dropResult.name}!`);
          } else {
              console.log(`No item selected!`);
          }
      }
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  return (
    <article
      ref={drag}
      key={data._id}
      className={styles.col_holder}
      onClick={onClick}
      style={{ opacity: isDragging ? 0.5 : 1 }}>

      {ingredientCount > 0 && <Counter count={ingredientCount} size="default" extraClass="m-1" />}
      <div className={`${styles.col_img} ${'pl-4'} ${'pr-4'}`}>
        <img src={data.image_large} alt={data.name} />
      </div>
      <div className={`${styles.col_price} ${'pb-1'} ${'pt-1'}`}>
        <p className={`${styles.col_price_p} ${'pr-2'} ${'text'} ${'text_type_digits-small'}`}>{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.col_name}>
        <p className={`${styles.col_name_p} ${'text'} ${'text_type_main-default'}`}>{data.name}</p>
      </div>
    </article>
  );
}

export default DraggableCard;
