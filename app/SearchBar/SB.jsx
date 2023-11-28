import React from 'react';
import '../Search_CSS_Style/SearchingStyle.css'; // Assuming your CSS is in the public folder or imported into your React app

function App() {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchTerm = event.target.value;
      window.location.href = `SearchList.html?searchMovie=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div>
      {/* Nav Bar */}
      <div className="navbar">
        <div className="container flex">
          <div className="left-side">
            <a href="main.html">
              <img src="images/Logo.png" alt="Descriptive Text" className="NavLogo" />
            </a>
            <a href="main.html" className="MovieName-link">Movie </a> 
            <a href="main.html" className="RankerName-link">Ranker</a>
          </div>
          <nav>
            <ul>
              <li><a href="SignUp.html" className="NavSignUp">Sign Up</a></li>
              <li><a href="Login.html" className="NavLogin">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Search Bar */}
      <section className="SearchBar">
        <div className="container">
          <label htmlFor="searchInput">Search Movie</label>
          <input type="search" id="searchInput" placeholder="Enter your name..." onKeyPress={handleKeyPress} />
        </div>
      </section>

      {/* Footer */}
      <div className="footer">
        <div className="container flex">
          {/* Footer content here */}
        </div>
      </div>
    </div>
  );
}

export default App;
