import PropTypes from "prop-types";
import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => (
  <li className={isSelected ? "selected" : ""}>
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {friend.balance < 9 && (
      <p className="red">
        You owe {friend.name} {Math.abs(friend.balance)}$
      </p>
    )}

    {friend.balance > 0 && (
      <p className="green">
        {friend.name} owes you
        {Math.abs(friend.balance)}$
      </p>
    )}

    {friend.balance === 0 && (
      <p>
        You and
        {friend.name} are even
      </p>
    )}

    <Button onClick={() => onSelection(friend)}>
      {isSelected ? "Close" : "Select"}
    </Button>
  </li>
);

Friend.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default Friend;
