import PropTypes from 'prop-types';
import Button from './Button';

const Friend = ({ friend }) => (
  <li>
    {friend.name}
    <Button>Select</Button>
  </li>
);

Friend.propTypes = {
  friend: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    },
  ).isRequired,
};

export default Friend;
