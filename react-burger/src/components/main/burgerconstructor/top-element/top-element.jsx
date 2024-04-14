import PropTypes from 'prop-types';
import styles from './top-element.module.css';
import { constructorType } from '../../utils/types.js';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

TopElement.propTypes = {
  items: PropTypes.arrayOf(constructorType).isRequired,
};

function TopElement({ items }) {  
  const bunItems = items.filter((item) => item.type === 'bun');
  const bunItem = bunItems.length > 0 ? bunItems[0] : null;

  return (
    <div className={ styles.top_element_div } key={bunItem?._id}>
      {bunItem && (
        <ConstructorElement
          key={bunItem._id}
          isLocked={true}
          type='top'
          text={bunItem.name}
          price={bunItem.price}
          thumbnail={bunItem.image}
        />
      )}
    </div>
  );  
}
export default TopElement;
