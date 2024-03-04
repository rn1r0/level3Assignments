import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import data from './data';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BlogList blogData={data} />
      <Footer />
    </div>
  );
}

export default App;
