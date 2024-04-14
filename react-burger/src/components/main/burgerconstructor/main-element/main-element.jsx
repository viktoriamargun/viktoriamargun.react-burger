import PropTypes from 'prop-types';
import { constructorType } from '../../utils/types.js';
import styles from './main-element.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// -----------------------------------------------------------------------------------------------
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../../../services/ingredients/item-types.js';// Создайте файл ItemTypes.js и определите типы элементов
import classNames from 'classnames';

MainElement.propTypes = {
  items: PropTypes.arrayOf(constructorType).isRequired,
};

function MainElement({ data }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT_MAIN,
    drop: () => ({ name: 'main_element_constructor' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver;
  const classes = classNames(styles.main_constructor_element, {
    [styles.isActive]: isActive,
    [styles.canDrop]: canDrop,
  });

  return (
    <ul className={`${ styles.main_scr } ${ 'custom-scroll' }`}>
      <div className={`${ styles.element }`}>

        <div ref={drop} className={classes}>
          <p className={ styles.p_constructor_element }>
            {isActive ? 'Отпустите, чтобы добавить' : 'Выберите начинку'}
          </p>
        </div>

        {/* {items.map((item) => (
          item.type !== 'bun' && (
          <ConstructorElement
            key={item._id}
            type={item.type}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
          )
        ))} */}
      </div>
    </ul>
  )
}
export default MainElement;