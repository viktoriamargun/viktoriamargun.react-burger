import PropTypes from 'prop-types';
import styles from './top-element.module.css';
import { constructorType } from '../../utils/types.js';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// -----------------------------------------------------------------------------------------------
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../../../services/ingredients/item-types.js';// Создайте файл ItemTypes.js и определите типы элементов
import classNames from 'classnames';

TopElement.propTypes = {
  items: PropTypes.arrayOf(constructorType).isRequired,
};

function TopElement({ items }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT_BUN,
    drop: () => ({ name: 'top_constructor_element' }),    
    // (
    //   <ConstructorElement
    //     key={bunItem._id}
    //     isLocked={true}
    //     type='top'
    //     text={bunItem.name}
    //     price={bunItem.price}
    //     thumbnail={bunItem.image}
    //   />
    // ),

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver;
  const classes = classNames(styles.top_constructor_element, {
    [styles.isActive]: isActive,
    [styles.canDrop]: canDrop,
  });
  // ------------------------------------------------------------------------
  const bunItems = items.filter((item) => item.type === 'bun');
  const bunItem = bunItems[0]; 

  return (
    <div className={ styles.top_element_div } key={bunItem?._id}>
      
      <div ref={drop} className={classes}> 
        <p className={ styles.p_constructor_element }>
          {isActive ? 'Отпустите, чтобы добавить' : 'Выберите булки'}
        </p>
      </div>

      {/* {bunItem && (
        <ConstructorElement
          key={bunItem._id}
          isLocked={true}
          type='top'
          text={bunItem.name}
          price={bunItem.price}
          thumbnail={bunItem.image}
        />
      )} */}
    </div>
  );  
}
export default TopElement;