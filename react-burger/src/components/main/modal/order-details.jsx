import styles from "./order-details.module.css";
import svg from '../../../images/done.svg';
import PropTypes from 'prop-types';

function OrderDetails({ orderNumber }) {  
  return (
    <div className={`${ styles.order_modal_content } ${ 'pt-0' } ${ 'pr-30' } ${ 'pb-30' } ${ 'pl-30' }`}>
      <div className={`${ styles.id_order } ${'pt-10'}`}> 
        <p className={`${ styles.id_order_number } ${ 'text' } ${ 'text_type_digits-large' }`} >
          {orderNumber}
        </p>
        <p className={`${ styles.id_order_p } ${ 'pt-8' }`}>идентификатор заказа</p>
      </div>
      <div className={`${ styles.modal_img} ${ 'pt-15' } ${ 'pb-15' }`}>
        <img className={ styles.modal_img} src={svg} alt='done' />
      </div>
      <div className={ styles.info_order }>
        <p className={ styles.info_order_state }>Ваш заказ начали готовить</p>
        <p className={`${ styles.info_order_p} ${ 'pt-2' }`}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </div>
  )
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};

export default OrderDetails;
