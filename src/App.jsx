import { useState } from 'react'
import { NewEditor } from './components';

function App() {
  const [code, setCode] = useState();
  return (
    <NewEditor code={code} setCode={setCode}/>
  )
}

export default App
