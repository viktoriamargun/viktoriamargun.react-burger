import React from "react";
import ReactDOM from 'react-dom';
import './ingredients.css';
import data from '../utils/data.js';

import { Tab, Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const TabL = () => {
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
  root.render(<TabL />);

  const CardBun = () => {
    return (
      <>
        {data.map((item) => (
          item.type === 'bun' && (
            <>
            <article className='col-holder'>
              <Counter count={1} size="default" extraClass="m-1" />
              <div className="col_img pl-4 pr-4">
                <img src={item.image_large} alt={item.name} />
              </div>             
              <div className="col_price pb-1 pt-1">
                <p className='pr-2 text text_type_digits-small'>{item.price}</p>
                <CurrencyIcon type="primary" />                             
              </div>
              <div className="col_name">
                <p className='text text_type_main-default'>{item.name}</p>
              </div>              
            </article>
            </>
          )
          ))}      
      </>
    )
  }
  root.render(<CardBun />);

  const CardSauce = () => {
    return (  
      <>
        {data.map((item) => (
          item.type === 'sauce' && (
            <>
            <article className='col-holder'>
              <Counter count={1} size="default" extraClass="m-1" />
              <div className="col_img pl-4 pr-4">
                <img src={item.image_large} alt={item.name} />
              </div>             
              <div className="col_price pb-1 pt-1">
                <p className='pr-2 text text_type_digits-small'>{item.price}</p>
                <CurrencyIcon type="primary" />                             
              </div>
              <div className="col_name">
                <p className='text text_type_main-default'>{item.name}</p>
              </div>              
            </article>
            </>
          )
          ))}      
      </>
      )
  }
  root.render(<CardSauce />);

  const CardMain = () => {
    return (
      <>
        {data.map((item) => (
          item.type === 'main' && (
          <>
            <article className='col-holder'>
              <Counter count={1} size="default" extraClass="m-1" />
              <div className="col_img pl-4 pr-4">
                <img src={item.image_large} alt={item.name} />
              </div>             
              <div className="col_price pb-1 pt-1">
                <p className='pr-2 text text_type_digits-small'>{item.price}</p>
                <CurrencyIcon type="primary" />                             
              </div>
              <div className="col_name">
                <p className='text text_type_main-default'>{item.name}</p>
              </div>              
            </article>
          </>
          )
          ))}
      </>        
    
    )
  }
  root.render(<CardMain />);


class BurgerIngredients extends React.Component {
  render() {
    return (
      <section className="content_left">
        <div className="p40 pb-5"><h1 className="text text_type_main-large">Соберите бургер</h1></div>
        
        <div className="tab_content">
          <div className="tab_nav"><TabL /></div>

          <div className="scrollbox custom-scroll">

            <div id="one">
              <h2 className="text text_type_main-medium" style={{ padding: '0 0 24px 0' }}>Булки</h2>

              <div className="ingr-holder">  
              <CardBun />
              </div>              
            </div>

            <div id="two">
              <h2 className="text text_type_main-medium" style={{ padding: '40px 0 24px 0' }}>Соусы</h2>

              <div className="ingr-holder">  
              <CardSauce />
              </div>
            </div>              
          
            <div  id="three">
            <h2 className="text text_type_main-medium" style={{ padding: '40px 0 24px 0' }}>Начинки</h2>
            
            <div className="ingr-holder">  
            <CardMain />
            </div>              
            </div>


          </div>


        </div>
      </section>
    );
  }
}

export default BurgerIngredients;