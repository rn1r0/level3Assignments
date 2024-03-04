import './App.css'
import FriendList from './components/FriendList.jsx';
import friendsData from './data.jsx';

function App() {
  return (
    <div>
      <h1>My Friends and Their Pets</h1>
      <FriendList friends={friendsData} />
    </div>
  );
}

export default App;
