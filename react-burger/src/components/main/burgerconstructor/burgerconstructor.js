import React from "react";
import ReactDOM from 'react-dom';   
import './burgerconstructor.css';
import data from '../utils/data.js';

import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

const TopElement = () => {
  const bunItems = data.filter((item) => item.type === 'bun');
  const bunItem = bunItems.length > 0 ? bunItems[0] : null;

  return (
    <div className='' style={{ display: 'flex', flexDirection: 'column', padding: '0 0 10px 40px' }}>
      {bunItem && (
        <ConstructorElement
          key={bunItem.id}
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
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TopElement />);

const MainElement = () => {
  return (
    <ul className={`main_scr @{styles.list} custom-scroll`}>
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
  const bunItems = data.filter((item) => item.type === 'bun');
  const bunItem = bunItems.length > 1 ? bunItems[1] : null;

  return (
    <div className='' style={{ display: 'flex', flexDirection: 'column', padding: '10px 0 0 40px' }}>
      {bunItem && (
        <ConstructorElement
          key={bunItem.id}
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
root.render(<BottomElement />);

class BottomPrice extends React.Component {
  render() {
    return (
      <div className='pr-4' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: '40px 16px 0 40px' }}>
        <span className="text text_type_digits-medium" style={{ padding: '0 40px 0 0' }}>
          {'610'}
          <CurrencyIcon type="primary" className='pl-2' />
        </span>
        <Button htmlType="button" type="primary" size="large" >Оформить заказ</Button>
      </div>
    );
  }
}

class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className="content_right">
        <TopElement />
        <MainElement />
        <BottomElement />
        <BottomPrice />      
      </section>
    );
  }
}

export default BurgerConstructor;