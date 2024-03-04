
import React from 'react';
import BadgeForm from './components/BadgeForm.jsx';
import Badge from './components/Badge.jsx';
import './App.css'

function App() {
  const [badgeInfo, setBadgeInfo] = React.useState({ firstName: '', lastName: '', email: '', phone: '', placeOfBirth: '', favoriteFood: '' });
  const [badges, setBadges] = React.useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBadgeInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      setBadges(prevState => [...prevState, badgeInfo]);
      setBadgeInfo({ firstName: '', lastName: '', email: '', phone: '', placeOfBirth: '', favoriteFood: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  const validateInputs = () => {
    return Object.values(badgeInfo).every(value => value.trim().length > 0);
  };

  return (
    <div className="container">
      <BadgeForm
        badgeInfo={badgeInfo}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      {badges.map((badge, index) => (
        <Badge key={index} badge={badge} />
      ))}
    </div>
  );
}

export default App;
