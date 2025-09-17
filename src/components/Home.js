import React from "react";
import "./Home.css";
import LightRays from "./LightRays";

function Home() {
  return (
    <section id="home" className="home">
      <h1 className="in">Welcome To Link Lab !</h1>
      <LightRays
        raysOrigin="top-center" // Keep this as is
        raysColor="#fff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
        style={{
          top: "90px", // Start rays from below navbar
          height: "calc(100vh - 90px)", // Adjust height accordingly
        }}
      />
      <p className="pa">
        A place where students connect, share ideas, and grow together.
      </p>
      <button className="btn">Get Started</button>
    </section>
  );
}

export default Home;
