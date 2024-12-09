import { useState } from 'react';
import './App.css';
import AddProduct from './AddProduct';
import Navbar from './Navbar';
import Allitems from './Allitems';
import Searchbar from './Searchbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Renamed for better readability

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Searchbar />
        {isLoggedIn && <AddProduct />} {/* Only show AddProduct if logged in */}
        <Allitems />
      </div>
    </>
  );
}

export default App;
