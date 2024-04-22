import { useState } from 'react';
import PropTypes from 'prop-types';

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>
        {' '}
        Split a bill with
        {selectedFriend.name}
      </h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input
        id="bill"
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="expense">🧍‍♀️ Your expense</label>
      <input
        id="expens"
        type="number"
        value={paidByUser}
        onChange={(e) => setPaidByUser(
          Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
        )}
      />

      <label htmlFor="FriendExpense">
        👫
        {selectedFriend.name}
        &apos;s expense
      </label>
      <input type="text" disabled value={paidByFriend} id="FriendExpense" />

      <label htmlFor="paidBy">🤑 Who is paying the bill</label>
      <select
        id="paidBy"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button type="submit" className="button">
        Split bill
      </button>
    </form>
  );
};

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
  onSplitBill: PropTypes.func.isRequired,
};

export default FormSplitBill;
