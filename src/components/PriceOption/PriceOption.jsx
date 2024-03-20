import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {price} = option;
  return (
    <div>
        <li>{price}</li>
    </div>
  )
}

PriceOption.propTypes = {
    PriceOption: PropTypes.object
}

export default PriceOption