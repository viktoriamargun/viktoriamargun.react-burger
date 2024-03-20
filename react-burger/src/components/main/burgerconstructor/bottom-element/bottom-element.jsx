import PropTypes from 'prop-types';
import { constructorType } from '../../utils/types.js';
import styles from './bottom-element.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

BottomElement.propTypes = {
  items: PropTypes.arrayOf(constructorType).isRequired,
};

function BottomElement({ items }) {
  const bunItems = items.filter((item) => item.type === 'bun');
  const bunItem = bunItems.length > 1 ? bunItems[1] : null;

  return (
    <div className={ styles.bottom_element_div }>
      {bunItem && (
        <ConstructorElement
          key={bunItem._id}
          isLocked={true}
          type='bottom'
          text={bunItem.name}
          price={bunItem.price}
          thumbnail={bunItem.image}
        />
      )}
    </div>
  );  
}
export default BottomElement;