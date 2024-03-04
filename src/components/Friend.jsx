import PropTypes from 'prop-types';
import Pet from './Pets.jsx';

const Friend = ({ name, age, pets }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <h3>Pets:</h3>
    <ul>
      {pets.map((pet, index) => (
        <li key={index}>
          <Pet name={pet.name} breed={pet.breed} />
        </li>
      ))}
    </ul>
  </div>
);

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Friend;
