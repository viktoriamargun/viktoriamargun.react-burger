import styles from "./ingredient-details.module.css";
import PropTypes from 'prop-types';
import { ingredientdetailsType } from '../utils/types.js';

IngredientDetails.propTypes = {
  details: PropTypes.shape({
    ...ingredientdetailsType,
    isRequired: PropTypes.bool
  }).isRequired,
};

function IngredientDetails({ details, children }) {
  const isRequired = details?.isRequired !== undefined ? details.isRequired : true;
if (!details) return null; // Или показывать загрузку


  return (
    <>
      <div className={`${styles.ingredient_details_content} ${ 'pt-0' } ${ 'pr-10' } ${ 'pb-15' } ${ 'pl-10' }`}>

        <div className={styles.ingredient_details_image}>
          <img src={details.image_large} alt={details.name} />
        </div>

        <div className={`${styles.ingredient_details_name} ${ 'pt-4' } ${ 'pr-0' } ${ 'pb-8' } ${ 'pl-0' }`}>
          <p className={`${ styles.ingredient_name_p }`}>{details.name} </p>
        </div>

        <div className={styles.nutrition_values}>
          <div className={`${styles.nutrition_values_item} ${'text'} ${'text_type_main-default'} ${'text_color_inactive'} ${'flex-align-justify-center'}`}>
            <span className={`${'mb-2'}`}>Калории, ккал</span>
            <span className={`${'text'} ${'text_type_digits-default'}`}>{details.calories}</span>
          </div>
          <div className={`${styles.nutrition_values_item} ${'text'} ${'text_type_main-default'} ${'text_color_inactive'} ${'flex-align-justify-center'}`}>
            <span className={`${'mb-2'}`}>Белки, г</span>
            <span className={`${'text'} ${'text_type_digits-default'}`}>{details.carbohydrates}</span>
          </div>
          <div className={`${styles.nutrition_values_item} ${'text'} ${'text_type_main-default'} ${'text_color_inactive'} ${'flex-align-justify-center'}`}>
            <span className={`${'mb-2'}`}>Жиры, г</span>
            <span className={`${'text'} ${'text_type_digits-default'}`}>{details.fat}</span>
          </div>
          <div className={`${styles.nutrition_values_item} ${'text'} ${'text_type_main-default'} ${'text_color_inactive'} ${'flex-align-justify-center'}`}>
            <span className={`${'mb-2'}`}>Углеводы, г</span>
            <span className={`${'text'} ${'text_type_digits-default'}`}>{details.proteins}</span>
          </div>
        </div>
        
      </div>    
    </>
  )
}
export default IngredientDetails;