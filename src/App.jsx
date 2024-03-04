import './App.css'
import VacationCard from './component/VacationCard.jsx';
import vacationSpots from './data.jsx';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        {vacationSpots.map((spot, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <VacationCard
              place={spot.place}
              price={spot.price}
              timeToGo={spot.timeToGo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
