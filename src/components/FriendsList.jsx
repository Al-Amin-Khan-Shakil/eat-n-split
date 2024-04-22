import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendsList = ({ friends, onSelection, selectedFriend }) => (
  <ul>
    {friends.map((friend) => (
      <Friend
        friend={friend}
        key={friend.id}
        selectedFriend={selectedFriend}
        onSelection={onSelection}
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
  onSelection: PropTypes.func.isRequired,
  selectedFriend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
};

export default FriendsList;
