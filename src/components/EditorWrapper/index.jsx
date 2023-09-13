
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';

import  NewEditor  from '../NewEditor'

const EditorWrapper = () => {

    const [code, setCode] = useState();
    const [testCases, setTestCases] = useState();
  
    const handleClick = async (e) => {
      e.preventDefault();
      const response = await axios.post('http://localhost:3000/python', {code}).then((data) => {
      console.log(data.data[0]);  
      setTestCases(data.data[0])
      console.log(testCases);
    })
  
    }

    const dropIn = {
      hidden: {
        y: '-100vh',
        opacity: 0,
      },
      visible: {
        y: '0',
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        }
      },
      exit: {
        y: '100vh',
        opacity: 0,
      },
    }

    return (
        <motion.div
          className='modal'
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div>{testCases}</div>
          <NewEditor code={code} setCode={setCode}/>
          <button className='submit-btn' onClick={handleClick}>Submit</button>
        </motion.div>
    )


}

export default EditorWrapper