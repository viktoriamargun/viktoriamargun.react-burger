import PropTypes from 'prop-types';
import styles from './bottom-element.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../../services/ingredients/item-types.js';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addBun } from '../../../../services/constructor/slice.js';

BottomElement.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function BottomElement() {
  const dispatch = useDispatch();
  const bun = useSelector(state => state.burgerConstructor.bun);

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
  const classes = classNames(styles.bottom_constructor_element, {
    [styles.isActive]: isActive,
    [styles.canDrop]: canDrop,
  });

  return (
    <div className={styles.bottom_element_div}>
      <div className={classes} ref={drop}>
        {bun ? (
          <ConstructorElement
            isLocked={true}
            type='bottom'
            text={`${bun.name} (низ)`}
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

export default BottomElement;
