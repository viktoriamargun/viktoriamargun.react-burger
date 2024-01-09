// import React from "react";
// import ReactDOM from 'react-dom';   
import PropTypes from 'prop-types';
import styles from './top-element.module.css';
import { data } from '../../utils/data.js';

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

TopElement.propTypes = {
  key: PropTypes.number,
  _id: PropTypes.number,
  isLocked: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.node
}

function TopElement() {  
  const bunItems = data.filter((item) => item.type === 'bun');
  const bunItem = bunItems.length > 0 ? bunItems[0] : null;

  return (
    <div className={ styles.top_element_div } key={bunItem.id}>
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