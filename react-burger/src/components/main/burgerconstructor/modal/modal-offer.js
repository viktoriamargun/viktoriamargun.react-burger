import React from "react";
import ReactDOM from 'react-dom';
import './modal-offer.css';


function ModalOffer() {
  const randomNumberInRange = Math.floor(Math.random() * (999999 - 100000 + 1)) + 999999;
  return (
    <div className="modal">
      <div>
        <p className="text text_type_digits-large" >{randomNumberInRange}</p>
        <p>идентификатор заказа</p>        
      </div>
      <div>
        <img />
      </div>
      <div>
        <p>Ваш заказ начали готовить</p>
        <p>Дождитесь готовности на орбитальной станции</p>
      </div>

     
    </div>
  );  
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ModalOffer />);


