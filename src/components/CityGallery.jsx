import { useState } from 'react';

import orlando from '../assets/images/orlando.jpg';
import boston from '../assets/images/boston.jpg';
import baltimore from '../assets/images/baltimore.jpg';
import leesburg from '../assets/images/leesburg.jpg';
import frederick from '../assets/images/frederick.jpg';
import sanfrancisco from '../assets/images/sanfrancisco.jpg';
import newyork from '../assets/images/newyork.jpg';
import charleston from '../assets/images/charleston.jpg';
import berlin from '../assets/images/berlin.jpg';
import bangor from '../assets/images/bangor.jpg';

const citiesData = [
  { id: '1', img: orlando, title: 'Orlando, FL', price: 3000 },
  { id: '2', img: boston, title: 'Boston, MA', price: 3500 },
  { id: '3', img: baltimore, title: 'Baltimore, MD', price: 3000 },
  { id: '4', img: leesburg, title: 'Leesburg, VA', price: 2000 },
  { id: '5', img: frederick, title: 'Frederick, MD', price: 2100 },
  { id: '6', img: sanfrancisco, title: 'San Francisco, CA', price: 3800 },
  { id: '7', img: newyork, title: 'New York, NY', price: 4000 },
  { id: '8', img: charleston, title: 'Charleston, SC', price: 2600 },
  { id: '9', img: berlin, title: 'Berlin, NH', price: 2200 },
  { id: '10', img: bangor, title: 'Bangor, ME', price: 2000 },
];

function CityGallery() {
  const [sortOrder, setSortOrder] = useState('default');

  const getSortedCities = () => {
    if (sortOrder === 'low-to-high') {
      return [...citiesData].sort((a, b) => a.price - b.price);
    }
    if (sortOrder === 'high-to-low') {
      return [...citiesData].sort((a, b) => b.price - a.price);
    }
    return citiesData;
  };

  const sortedCities = getSortedCities();

  return (
    <div className="gallery-container">
      <h1>City Gallery</h1>

      <div className="filter-controls">
        <label htmlFor="sort-select">Sort by price: </label>
        <select
          id="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low-to-high">Lowest to Highest</option>
          <option value="high-to-low">Highest to Lowest</option>
        </select>
      </div>

      <div className="gallery-grid">
        {sortedCities.map((city) => (
          <div key={city.id} className="city-card">
            <img src={city.img} alt={city.title} />
            <div className="city-info">
              <h3>{city.title}</h3>
              <p className="price">${city.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityGallery;
