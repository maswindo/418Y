import './SearchCssStyle/SearchList.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSearchParams } from 'react-router-dom';

function SearchList() {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('searchMovie');
    

    return (
        <div>
          <Navbar />
          {/* Search Results */}
          <section className="SearchResults">
            <div className="container">
              <h1>Search Results for: {searchTerm}</h1>
              {/* Display search results here */}
            </div>
          </section>
          <Footer />
        </div>
      );
  }

export default SearchList;
