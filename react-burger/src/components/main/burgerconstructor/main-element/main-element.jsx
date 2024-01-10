import PropTypes from 'prop-types';
import { constructorType } from '../../utils/types.js';

import styles from './main-element.module.css';

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

MainElement.propTypes = {
  items: PropTypes.arrayOf(constructorType).isRequired,
};

function MainElement({ items }) {
  return (
    <ul className={`${ styles.main_scr } ${ 'custom-scroll' }`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item) => (
          item.type !== 'bun' && (
          <ConstructorElement
            key={item._id}
            type={item.type}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
          )
        ))}
      </div>
    </ul>
  )
}
export default MainElement;