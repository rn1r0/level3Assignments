import HOME from '../images/home-bg.png'

const Navbar = () => (
    <nav className="navbar">
      <div className="navbar-bg"></div> {HOME}
      <div className="container">
        <a className="navbar-brand" href="index.html">Start Bootstrap</a>
        <button className="navbar-toggler" type="button">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="post.html">Sample Post</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;