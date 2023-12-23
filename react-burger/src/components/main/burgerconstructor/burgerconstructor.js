import React from "react";
import ReactDOM from 'react-dom';   

import './burgerconstructor.css';

// import data from '../utils/data.js';
import data from './data.js';

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

// class ConstructTop_ extends React.Component {
//   render() {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>


//  <ConstructorElement
//   type={data.props.type}
//   isLocked={true}
//   text={data.props.name}
//   price={data.props.price}
//   thumbnail={data.props.image}
// />


//       </div>
  
//     )
//   }
// } 




const ConstructorElement_ = () => {
  return (
    <ul className={`bbb @{styles.list} custom-scroll`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {data.map((item) => (

          <ConstructorElement
            type={item.type}
            // isLocked={true}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
          
        ))}

      </div>
    </ul>
  )
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ConstructorElement_ />);

class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className="content_right">

        {/* <ConstructTop /> */}
        {/* scroll-element */}
        <ConstructorElement_ />
        {/* end */}
        {/* <ConstructBottom /> */}

        {/* сумма и кнопка */}
        
      </section>
    );
  }
}

export default BurgerConstructor;
