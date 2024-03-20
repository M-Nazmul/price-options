import PropTypes from 'prop-types';


function Link({route}) {
    const {name, path} = route;
    console.log(route);
    return (
        <div>
            <li className='text-xl my-3'>
                <a className='hover:bg-slate-600 ease-in duration-200 py-2 px-6 rounded-full' href={path}> {name} </a>
            </li>
        </div>
    );
}

Link.propTypes = {
    route: PropTypes.object
};
export default Link;