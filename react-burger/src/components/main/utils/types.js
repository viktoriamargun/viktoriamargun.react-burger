import PropTypes from 'prop-types';

export const ingredientType = PropTypes.shape({
  key: PropTypes.string,
  _id: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired  
});

export const constructorType = PropTypes.shape({
  key: PropTypes.string,
  _id: PropTypes.string.isRequired,
  isLocked: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
});