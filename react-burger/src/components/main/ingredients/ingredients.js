import React from "react";
import ReactDOM from 'react-dom';   

import './ingredients.css';

import data from '../utils/data.js';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Tab_ = () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }     
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(<Tab_ />);

class BurgerIngredients extends React.Component {
  render() {
    return (
      <section className="content_left">
        <div className="p40 pb-5"><h1 className="text text_type_main-large">Соберите бургер</h1></div>
        
        <div className="tab_content">
          <div className="tab_nav"><Tab_ /></div>

          <div className="scrollbox custom-scroll">
            <div>
              <h2 className="text text_type_main-medium">Булки</h2>
              {/* <div className="cardholder">
                <div></div>
                <div></div>
              </div> */}
            </div>
            
            <div>
              <h2 className="text text_type_main-medium">Соусы</h2>
              {/* <div className="cardholder"></div> */}
            </div>
            
            <div>
              <h2 className="text text_type_main-medium">Начинки</h2>
              {/* <div className="cardholder"></div> */}
            </div>
            
          </div>


        </div>
      </section>
    );
  }
}

export default BurgerIngredients;