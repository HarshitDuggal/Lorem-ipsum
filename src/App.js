import React, { useState } from 'react';
import data from './data';
function App() {
  const [Info, setInfo] = useState([]);
  const [count, setcount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello World');
  }
  return (
  <section className='section-center'>
    <h3>Tired of boring Lorium ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraphs:</label>
      <input type='number' name='amount' id='amount' value={count} onChange={(e) => {setcount(e.target.value)}}/>
      <button type='submit' className='btn'>Generate</button>
    </form>
  </section>
    );
}

export default App;
