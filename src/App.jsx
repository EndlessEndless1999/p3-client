import { useState } from 'react'
import { NewEditor } from './components';
import axios from 'axios';

function App() {
  const [code, setCode] = useState();
  const [testCases, setTestCases] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/python', {code}).then((data) => {
    console.log(data.data[0]);  
    setTestCases(data.data[0])})
    console.log(testCases);
  }


  return (
    <>
    <div>{testCases}</div>
    <NewEditor code={code} setCode={setCode}/>
    <button className='submit-btn' onClick={handleClick}>Submit</button>
    </>
  )
}

export default App
