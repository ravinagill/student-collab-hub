import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = title.textContent;
    title.innerHTML = '';

    // Split text into individual characters and wrap in spans
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Preserve spaces
      span.style.animationDelay = `${index * 0.1}s`;
      span.classList.add('char');
      title.appendChild(span);
    });
  }, []);

  return (
    <main className="main-content">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-content">
            <h1 ref={titleRef} className="animated-title">Welcome To Link Lab !</h1>
            <p>A place where students connect, share ideas, and grow together.</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;