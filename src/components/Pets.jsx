import PropTypes from 'prop-types';

const Pet = ({ name, breed }) => (
  <div>
    <p>Name: {name}</p>
    <p>Breed: {breed}</p>
  </div>
);

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired
};

export default Pet;