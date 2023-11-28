import React, { useEffect, useState } from 'react';
import '../Search_CSS_Style/SearchingStyle.css'; // Adjust the path as needed

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getSearchBarInput = (name) => {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      const results = regex.exec(window.location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    setSearchTerm(getSearchBarInput('searchMovie'));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="container flex">
          <div className="left-side">
            <a href="main.html">
              <img src="components/logo-no-background.png" alt="Descriptive Text" className="NavLogo" />
            </a>
            <a href="main.html" className="MovieName-link">Movie</a> 
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

      {/* Movie List */}
      <section className="MovieList">
        {searchTerm && <h2>You searched for: {searchTerm}</h2>}
      </section>

      {/* Footer */}
      <div className="footer">
        <div className="container flex">
          {/* Footer content */}
        </div>
      </div>
    </div>
  );
}

export default App;
