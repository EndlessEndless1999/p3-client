import { useState } from 'react'
import { NewEditor } from './components';
import axios from 'axios';

function App() {
  const [code, setCode] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/code', {code}).then((res) => console.log(res))
  }


  return (
    <>
    <NewEditor code={code} setCode={setCode}/>
    <button className='submit-btn' onClick={handleClick}>Submit</button>
    </>
  )
}

export default App
