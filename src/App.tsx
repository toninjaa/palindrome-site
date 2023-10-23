import { useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState("");  
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setVal(event.target.value.toString().toLowerCase());
  }

  function handleSubmit() {
    if (val === val.split("").reverse().join("")) {
      alert(`${val} is a palindrome!`);
    } else {
      alert(`Sorry, no palindromes this time.`);
    }
  }

  return (
    <>
      <h1>PALINDROME DETECTOR!</h1>
      <h3>Enter your text to put it to the palindrome test:</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea value={val} onChange={handleChange} />
          <div>
            <button type="submit">Palindrome?</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
