import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
  return (
    <div className='flex flex-col bg-slate-800 text-white hover:bg-slate-700 p-4 ease-in duration-200 rounded-md'>
      <h2 className='text-center'>
        <span className='text-5xl font-bold'>{price}</span>
        <span className='text-xl'>/mon</span>
      </h2>
      <h3 className='text-3xl text-center my-7'>{name}</h3>
      <div className='pl-6  flex-grow'>
        {
          features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
        }
      </div>
      <button className='btn w-full mt-4 text-white capitalize  border-none ease-in duration-200'>bye now</button>
    </div>
  )
}

PriceOption.propTypes = {
  option: PropTypes.object
}

export default PriceOption