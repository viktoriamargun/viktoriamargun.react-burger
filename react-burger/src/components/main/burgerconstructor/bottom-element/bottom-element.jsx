// import React from "react";
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import styles from './bottom-element.module.css';
import { data } from '../../utils/data.js';

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

BottomElement.propTypes = {
  key: PropTypes.number,
  _id: PropTypes.number,
  isLocked: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.node
}

function BottomElement() {
  const bunItems = data.filter((item) => item.type === 'bun');
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