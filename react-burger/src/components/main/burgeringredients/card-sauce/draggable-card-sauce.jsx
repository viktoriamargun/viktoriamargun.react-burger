import React from "react";
import {useDrag} from 'react-dnd';
import {ItemTypes} from '../../../../services/ingredients/item-types.js';
import styles from './card-sauce.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function DraggableCardSauce({data, onClick, count}) {
    const handleClick = () => {
        onClick(data);
    }

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.INGREDIENT_SAUCE,
        item: {...data},

        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                if (item) {
                    console.log(`You dropped ${item._id} into main_element_constructor!`);
                } else {
                    console.log(`No item selected!`);
                }
            }
        },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    });

    return (
        <article
            ref={drag}
            key={data._id}
            className={styles.col_holder}
            onClick={handleClick}>

            {count > 0 && <Counter count={count} size="default" extraClass="m-1"/>}
            <div className={`${styles.col_img} ${'pl-4'} ${'pr-4'}`}>
                <img src={data.image_large} alt={data.name}/>
            </div>
            <div className={`${styles.col_price} ${'pb-1'} ${'pt-1'}`}>
                <p className={`${styles.col_price_p} ${'pr-2'} ${'text'} ${'text_type_digits-small'}`}>{data.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <div className={styles.col_name}>
                <p className={`${styles.col_name_p} ${'text'} ${'text_type_main-default'}`}>{data.name}</p>
            </div>
        </article>
    );
}

export default DraggableCardSauce;
