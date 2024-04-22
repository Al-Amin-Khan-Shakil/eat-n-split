import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = uuidv4();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="FriendName">🫂 Name</label>
      <input
        id="FriendName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="FriendImage">🌄 Image URL</label>
      <input
        id="FriendImage"
        name="FriendImage"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
};

FormAddFriend.propTypes = {
  onAddFriend: PropTypes.func.isRequired,
};

export default FormAddFriend;
