import React from "react";
import PropTypes from 'prop-types';
import {ingredientType} from '../../utils/types.js';
import DraggableCard from './draggable-card.jsx';
import {useSelector} from "react-redux";
import {burgerConstructorSlice} from "../../../../services/constructor/slice";

export const CardBun = ({data, onClick}) => {
    const stat = useSelector(burgerConstructorSlice.selectors.statistics);
    
    return (
        <>
            {data?.map(
                (item) =>
                    item.type === 'bun' && (
                        <DraggableCard
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

CardBun.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    onClick: PropTypes.func.isRequired,
};