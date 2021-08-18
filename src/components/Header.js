import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1 className='m-0'>{title}</h1>
      {location.pathname === '/' && 
        <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}
        />
      }
    </header>
  )
}

// props bisa dari induk ke component dan bisa dibuat default-nya disini
Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header


