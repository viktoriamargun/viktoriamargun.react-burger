// import React from "react";
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './card-main.module.css';
import { data } from '../../utils/data.js';

import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

CardMain.propTypes = {
  key: PropTypes.number,
  _id: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  image_large: PropTypes.node
}

export default function CardMain() {
  const mainItems = data.map((item) => (item.type === 'main' && (
    <article key={item._id} className={styles.col_holder}>
      
      <Counter count={1} size="default" extraClass="m-1" />
      
      <div className={`${styles.col_img} ${'pl-4'} ${'pr-4'}`}>
        <img src={item.image_large} alt={item.name} />
      </div>
      
      <div className={`${styles.col_price} ${'pb-1'} ${'pt-1'}`}>
        <p className={`${styles.col_price_p} ${'pr-2'} ${'text'} ${'text_type_digits-small'}`}>{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      
      <div className={styles.col_name}>
        <p className={`${styles.col_name_p} ${'text'} ${'text_type_main-default'}`}>{item.name}</p>
      </div>
    </article>
  )
)
);
return <>{mainItems}</>;
}