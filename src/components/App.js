import React from "react";

// Define the Navbar component
function Navbar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}


function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// Define the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Define the main App component
function App() {
  return (
    <div>
      <Navbar />   
      <Home />    
      <About />    
    </div>
  );
}

export default App;
