// import React from "react";
// import ReactDOM from 'react-dom';
// import data from '../utils/data.js';
import PropTypes from 'prop-types';
import styles from './burgeringredients.module.css';

import TabL from './nav-tab/nav-tab.jsx';
import CardBun from './card-bun/card-bun.jsx';
import CardSauce from './card-sauce/card-sauce.jsx';
import CardMain from './card-main/card-main.jsx';

CardMain.propTypes = {
  key: PropTypes.number,
  _id: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  image_large: PropTypes.node
}

function BurgerIngredients() {
  return (
    <section className={ styles.content_left }>
      <div className={`${ 'p40' } ${ 'pb-5' }` }>
        <h1 className={` ${ 'text' } ${ 'text_type_main-large' }` }>Соберите бургер</h1>
      </div>
      
      <div className={ styles.tab_content }>
        <div className={ styles.tab_nav }><TabL /></div>
        
        <div className={`${ styles.scrollbox } ${ 'custom-scroll' }` }>
          <div id="one">
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' }` } style={{ padding: '0 0 24px 0' }}>Булки</h2>
            <div className={ styles.ingr_holder }>  
              <CardBun />
            </div>
          </div>
          
          <div id="two">
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' }` } style={{ padding: '40px 0 24px 0' }}>Соусы</h2>
            <div className={ styles.ingr_holder }>  
              <CardSauce />
            </div>
          </div>
          
          <div  id="three">
            <h2 className={` ${ 'text' } ${ 'text_type_main-medium' }` } style={{ padding: '40px 0 24px 0' }}>Начинки</h2>
            <div className={ styles.ingr_holder }>  
              <CardMain />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default BurgerIngredients;



// const TabL = () => {
//     const [current, setCurrent] = React.useState('one')
//     return (
//       <div style={{ display: 'flex' }}>
//         <Tab value="one" active={current === 'one'} onClick={setCurrent}>
//           Булки
//         </Tab>
//         <Tab value="two" active={current === 'two'} onClick={setCurrent}>
//           Соусы
//         </Tab>
//         <Tab value="three" active={current === 'three'} onClick={setCurrent}>
//           Начинки
//         </Tab>
//       </div>
//     )
//   }     
//   const root = ReactDOM.createRoot(document.querySelector('#root'));
//   root.render(<TabL />);

  // const CardBun = () => {
  //   return (
  //     <>
  //       {data.map((item) => (
  //         item.type === 'bun' && (
  //           <>
  //           <article className='col-holder'>
  //             <Counter count={1} size="default" extraClass="m-1" />
  //             <div className="col_img pl-4 pr-4">
  //               <img src={item.image_large} alt={item.name} />
  //             </div>             
  //             <div className="col_price pb-1 pt-1">
  //               <p className='pr-2 text text_type_digits-small'>{item.price}</p>
  //               <CurrencyIcon type="primary" />                             
  //             </div>
  //             <div className="col_name">
  //               <p className='text text_type_main-default'>{item.name}</p>
  //             </div>              
  //           </article>
  //           </>
  //         )
  //         ))}      
  //     </>
  //   )
  // }
  // root.render(<CardBun />);

  // const CardSauce = () => {
  //   return (  
  //     <>
  //       {data.map((item) => (
  //         item.type === 'sauce' && (
  //           <>
  //           <article className='col-holder'>
  //             <Counter count={1} size="default" extraClass="m-1" />
  //             <div className="col_img pl-4 pr-4">
  //               <img src={item.image_large} alt={item.name} />
  //             </div>             
  //             <div className="col_price pb-1 pt-1">
  //               <p className='pr-2 text text_type_digits-small'>{item.price}</p>
  //               <CurrencyIcon type="primary" />                             
  //             </div>
  //             <div className="col_name">
  //               <p className='text text_type_main-default'>{item.name}</p>
  //             </div>              
  //           </article>
  //           </>
  //         )
  //         ))}      
  //     </>
  //     )
  // }
  // root.render(<CardSauce />);

  // const CardMain = () => {
  //   return (
  //     <>
  //       {data.map((item) => (
  //         item.type === 'main' && (
  //         <>
  //           <article className='col-holder'>
  //             <Counter count={1} size="default" extraClass="m-1" />
  //             <div className="col_img pl-4 pr-4">
  //               <img src={item.image_large} alt={item.name} />
  //             </div>             
  //             <div className="col_price pb-1 pt-1">
  //               <p className='pr-2 text text_type_digits-small'>{item.price}</p>
  //               <CurrencyIcon type="primary" />                             
  //             </div>
  //             <div className="col_name">
  //               <p className='text text_type_main-default'>{item.name}</p>
  //             </div>              
  //           </article>
  //         </>
  //         )
  //         ))}
  //     </>        
    
  //   )
  // }
  // root.render(<CardMain />);
