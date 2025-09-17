import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-content">
            <h1 >Welcome To Link Lab !</h1>
            <p>A place where students connect, share ideas, and grow together.</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;