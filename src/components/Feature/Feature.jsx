import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import PropTypes from 'prop-types'

const Feature = ({feature}) => {

  return (
    <div >
        <p className="flex items-center gap-2"><span className="text-green-500 my-2"><IoMdCheckmarkCircleOutline /></span> {feature} </p>
    </div>
  )
}

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature