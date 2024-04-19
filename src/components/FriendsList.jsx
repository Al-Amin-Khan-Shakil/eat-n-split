import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendsList = ({ friends }) => (
  <ul>
    {friends.map((friend) => (
      <Friend
        friend={friend}
        key={friend.id}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;
