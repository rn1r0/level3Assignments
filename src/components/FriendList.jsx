import Friend from './Friend';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <div>
    {friends.map((friend, index) => (
      <Friend key={index} {...friend} />
    ))}
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      pets: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          breed: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default FriendList;
