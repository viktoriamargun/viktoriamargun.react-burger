import React from "react";
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types.js';
import DraggableCardMain from './draggable-card-main.jsx';
import {useSelector} from "react-redux";
import {burgerConstructorSlice} from "../../../../services/constructor/slice";

export const CardMain = ({data, onClick}) => {
    const stat = useSelector(burgerConstructorSlice.selectors.statistics);

    return (
        <>
            {data?.map(
                (item) =>
                    item.type === 'main' && (
                        <DraggableCardMain
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

CardMain.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    onClick: PropTypes.func.isRequired,
};