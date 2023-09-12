import { useState } from 'react'
import { NewEditor } from './components';
import axios from 'axios';

function App() {
  const [code, setCode] = useState();
  const [testCases, setTestCases] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/python', {code}).then((data) => {
    console.log(data);  
    setTestCases[data.passOrFail]})
    console.log(testCases);
  }


  return (
    <>
    <div>{testCases.map((testCase, i) => {
      return <div key={i}>{testCase}</div>
    })}</div>
    <NewEditor code={code} setCode={setCode}/>
    <button className='submit-btn' onClick={handleClick}>Submit</button>
    </>
  )
}

export default App
