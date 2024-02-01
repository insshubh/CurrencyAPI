import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Styles for the background
  const styles = {
    margin: 0,
    padding: 0,
    backgroundImage: 'url("https://images.unsplash.com/photo-1549421263-6064833b071b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN1cnJlbmN5JTIwZXhjaGFuZ2V8ZW58MHx8MHx8fDA%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw', // Set the width to 100vw
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff', // Set text color to white or any contrasting color
    fontFamily: 'Arial, sans-serif', // Set your preferred font-family
  };

  return (
    <div style={styles}>
      <div className='md-'>Currency Converter</div>
      
    </div>
  );
}

export default App;
