import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import sfiaImg from '../assets/home.svg';

const Home = () => {
  const [category, setCategory] = useState('All Categories');
  const [subcategory, setSubcategory] = useState('All Subcategories');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch initial data here
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search logic here
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>SFIA VERSION 8 COMPETENCY PROFILE SYSTEM</h1>
          <p>เป็นแพลตฟอร์มที่ช่วยวิเคราะห์ทักษะ ศักยภาพและประสิทธิภาพของบุคคล<br />ให้เข้ากับเกณฑ์มาตรฐาน SFIA Version 8</p>
        </div>
        <div className="hero-image">
          <img src={sfiaImg} alt="Hero" />
        </div>
      </div>
      
      <div className="wave-container">
        <svg viewBox="0 0 1428 174" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
          <path fill="#fff" d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
          <path fill="#fff" d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
        </svg>
      </div>

      <div className="search-container">
        <div className="search-box">
          <div className="search-item">
            <label>Category :</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>All Categories</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="search-item">
            <label>Subcategory :</label>
            <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
              <option>All Subcategories</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="search-item">
            <label>Jobs :</label>
            <input 
              type="text" 
              placeholder="Find your jobs here!" 
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="results-container">
        <h2>All Jobs</h2>
        <div className="results-divider"></div>
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.skill_name}</h3>
              <p>{result.overall}</p>
              <button className="read-more">Read more</button>
            </div>
          ))
        ) : (
          <div className="no-results">No data available in table.</div>
        )}
      </div>

      <div className="pagination">
        <span className="page-link">« Previous</span>
        <span className="page-number active">1</span>
        <span className="page-link">Next »</span>
      </div>
    </div>
  );
};

export default Home;
