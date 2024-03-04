import PropTypes from "prop-types";

const VacationCard = ({ place, price, timeToGo }) => {
    
  // Function to determine the background color based on timeToGo
  const getBackgroundColor = () => {
    switch (timeToGo) {
      case "Spring":
        return "#c3e6cb"; // Light green for Spring
      case "Summer":
        return "#bee5eb"; // Light blue for Summer
      case "Fall":
        return "#f8d7da"; // Light red for Fall
      case "Winter":
        return "#f5c6cb"; // Light pink for Winter
      default:
        return "#fff"; // Default white
    }
  };

  // Function to determine the price range
  const getPriceRange = () => {
    if (price < 500) {
      return "$";
    } else if (price < 1000) {
      return "$$";
    } else {
      return "$$$";
    }
  };

  return (
    <div className="card" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="card-body">
        <h5 className="card-title">{place}</h5>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">Time to Go: {timeToGo}</p>
        <p className="card-text">Price Range: {getPriceRange()}</p>
      </div>
    </div>
  );
};

VacationCard.propTypes = {
  place: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  timeToGo: PropTypes.string.isRequired,
};

export default VacationCard;
