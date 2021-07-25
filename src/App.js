import React, { useState } from 'react';
import data from './data';
function App() {
  const [Info, setInfo] = useState([]);
  const [count, setcount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if(count<=0){
      amount = 1
    }
    if(count > 8){
      amount = 8
    }
    setInfo(data.slice(0,amount))
  }
  return (
  <section className='section-center'>
    <h3>Tired of boring Lorium ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraphs:</label>
      <input type='number' name='amount' id='amount' value={count} onChange={(e) => {setcount(e.target.value)}}/>
      <button type='submit' className='btn'>Generate</button>
    </form>
    <article className='lorem-text'>
      {Info.map((inf,index) => {
        return <p key={index}>{inf}</p>
      })}
    </article>
  </section>
    );
}

export default App;
