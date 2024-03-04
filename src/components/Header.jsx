import HOME from '../images/home-bg.png'

const Header = () => (
    <header className="header">
      <div className="header-bg"></div> {HOME}
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="site-heading">
              <h1>Clean Blog</h1>
              <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
  
  export default Header;