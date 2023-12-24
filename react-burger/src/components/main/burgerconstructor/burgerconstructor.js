import React from "react";
import ReactDOM from 'react-dom';   

import './burgerconstructor.css';

import data from '../utils/data.js';

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

const TopElement = () => {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {data.map((item) => (
        item.type === 'bun' && (
          <ConstructorElement
            key={item.id}
            isLocked={true}
            type={item.type}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
          )
          ))}
      </div>

  )  
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TopElement />);


const MainElement = () => {
  return (
    <ul className={`bbb @{styles.list} custom-scroll`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {data.map((item) => (
        // item.type !== 'bun' && (
          <ConstructorElement
            key={item.id}
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
root.render(<MainElement />);

const BottomElement = () => {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {data.map((item) => (
        item.type === 'bun' && (
          <ConstructorElement
            key={item.id}
            isLocked={true}
            type={item.type}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
          )
          ))}
      </div>

  )  
}
root.render(<BottomElement />);


class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className="content_right">

        <TopElement />
        {/* scroll-element */}
        <MainElement />
        {/* end */}
        <BottomElement />

        {/* сумма и кнопка */}
        
      </section>
    );
  }
}

export default BurgerConstructor;
