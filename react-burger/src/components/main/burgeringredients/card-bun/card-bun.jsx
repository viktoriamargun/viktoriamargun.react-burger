import React, { useState, memo } from "react";
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types.js';   
import Modal from "../../modal/modal";
import IngredientDetails from "../../modal/ingredient-details";
import DraggableCard from './draggable-card.jsx';

export default memo(function CardBun({ data }) {
CardBun.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
};

const [selectedItemId, setSelectedItemId] = useState(null);

const handleItemClick = (itemId, title) => {
  setSelectedItemId(itemId);
};

const handleCloseModal = () => {
  setSelectedItemId(null);
};

const selectedIngredient = data.find(item => item._id === selectedItemId);

  const mainItems = data?.map(
    (item) => 
      item.type === 'bun' && (
        <DraggableCard 
          key={item._id} 
          data={item}
          onClick={() => handleItemClick(item._id)}
        /> 
      )
  );
  
  return (
    <>
      {mainItems}
      <Modal
        isOpen={!!selectedItemId} 
        handleClose={handleCloseModal}     
        title={"Детали ингредиента"} 
      >
        {selectedIngredient && <IngredientDetails details={selectedIngredient} />}
      </Modal>
    </>
  );
});
