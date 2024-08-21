import React, {useRef, useEffect, useState, useCallback} from 'react';
import {useInView} from 'react-intersection-observer';
import styles from './burgeringredients.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {ingredientsSlice} from '../../../services/ingredients/slice.js';

import TabL from './nav-tab/nav-tab.jsx';
import { CardBun } from './card-bun/card-bun.jsx';
import { CardSauce } from './card-sauce/card-sauce.jsx';
import { CardMain } from './card-main/card-main.jsx';
import IngredientDetails from "../modal/ingredient-details";
import Modal from "../modal/modal";
import {
    clearSelectedIngredient,
    selectedIngredientSlice,
    selectIngredient
} from "../../../services/selectedingredient/slice";

function BurgerIngredients() {
    const ingredients = useSelector(ingredientsSlice.selectors.ingredients);
    const dispatch = useDispatch();
    const [currentTab, setCurrentTab] = useState("one");
    const selectedIngredient = useSelector(selectedIngredientSlice.selectors.selectedIngredient);
    const buns = useSelector(ingredientsSlice.selectors.buns);
    const mains = useSelector(ingredientsSlice.selectors.mains);
    const sauces = useSelector(ingredientsSlice.selectors.sauces);

    const handleTabClick = (tab) => {
        const element = document.getElementById(tab);
        if (element) {
            const top = element.offsetTop;
            setCurrentTab(tab);
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }

    const sectionRefs = {
        one: useRef(null),
        two: useRef(null),
        three: useRef(null),
    };

    const [refOne, inViewOne] = useInView({threshold: 1});
    const [refTwo, inViewTwo] = useInView({threshold: 0.9});
    const [refThree, inViewThree] = useInView({threshold: 0.4});

    useEffect(() => {
        if (inViewOne) {
            setCurrentTab('one');
        }
        if (inViewTwo) {
            setCurrentTab('two');
        }
        if (inViewThree) {
            setCurrentTab('three');
        }
    }, [inViewOne, inViewTwo, inViewThree, dispatch]);

    const setSelectedIngredient = useCallback((ingredient) => {
        dispatch(selectIngredient(ingredient))
    }, []);

    return (
        <section className={styles.content_left}>
            <div className={`${'p40'} ${'pb-5'}`}>
                <h1 className={` ${'text'} ${'text_type_main-large'}`}>Соберите бургер</h1>
            </div>

            <div className={styles.tab_content}>
                <div data-header className={styles.tab_nav}>
                    <TabL
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                        handleTabClick={handleTabClick}
                    />
                </div>

                <div className={`${styles.scrollbox} ${'custom-scroll'}`}>

                    <div id="one" ref={refOne}>
                        <h2 className={` ${'text'} ${'text_type_main-medium'} ${'pl-0'} ${'pt-0'} ${'pr-0'} ${'pb-6'}`}>Булки</h2>
                        <div className={styles.ingr_holder}>
                            <CardBun data={buns}
                                     onClick={setSelectedIngredient}/>
                        </div>
                    </div>

                    <div id="two" ref={refTwo}>
                        <h2 className={` ${'text'} ${'text_type_main-medium'} ${'pl-0'} ${'pt-0'} ${'pr-0'} ${'pb-6'}`}>Соусы</h2>
                        <div className={styles.ingr_holder}>
                            <CardSauce data={sauces}
                                       onClick={setSelectedIngredient}/>
                        </div>
                    </div>

                    <div id="three" ref={refThree}>
                        <h2 className={` ${'text'} ${'text_type_main-medium'} ${'pl-0'} ${'pt-0'} ${'pr-0'} ${'pb-6'}`}>Начинки</h2>
                        <div className={styles.ingr_holder}>
                            <CardMain data={mains}
                                      onClick={setSelectedIngredient}/>
                        </div>
                    </div>
                </div>

            </div>
            {selectedIngredient && (
                <Modal
                    handleClose={() => dispatch(clearSelectedIngredient())}
                    title={"Детали ингредиента"}
                >
                    <IngredientDetails details={selectedIngredient}/>
                </Modal>
            )}
        </section>
    )
}

export default BurgerIngredients;
