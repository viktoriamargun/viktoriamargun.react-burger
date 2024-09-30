import React from "react";
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types.js';
import DraggableCardSauce from './draggable-card-sauce.jsx';
import {useSelector} from "react-redux";
import {burgerConstructorSlice} from "../../../../services/constructor/slice";

export const CardSauce = ({data, onClick}) => {
    const stat = useSelector(burgerConstructorSlice.selectors.statistics);

    console.log(stat);

    return (
      <>
        {data?.map(
            (item) =>
                item.type === 'sauce' && (
                    <DraggableCardSauce
                        key={item._id}
                        data={item}
                        onClick={onClick}
                        count={stat[item._id] ?? 0}
                    />
                )
        )}
      </>
  );
};

CardSauce.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  onClick: PropTypes.func.isRequired,
};