import styles from './top-element.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../../../services/ingredients/item-types.js';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {addBun, burgerConstructorSlice} from '../../../../services/constructor/slice.js';

function TopElement() {
  const dispatch = useDispatch();
  const bun = useSelector(burgerConstructorSlice.selectors.bun);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT_BUN,
    drop: (item) => {
      dispatch(addBun(item));
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