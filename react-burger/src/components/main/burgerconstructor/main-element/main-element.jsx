// import React from "react";
// import ReactDOM from 'react-dom';   
import PropTypes from 'prop-types';
import styles from './main-element.module.css';
import { data } from '../../utils/data.js';

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

MainElement.propTypes = {
  key: PropTypes.number,
  _id: PropTypes.number,
  isLocked: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.node
}

function MainElement() {
  return (
    <ul className={`${ styles.main_scr } ${ 'custom-scroll' }`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {data.map((item) => (
          // item.type !== 'bun' && (
          <ConstructorElement
            key={item._id}
            type={item.type}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
          // )
        ))}
      </div>
    </ul>
  )
}
export default MainElement;