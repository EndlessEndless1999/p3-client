
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';



import  NewEditor  from '../NewEditor'

const EditorWrapper = (props) => {

    const [code, setCode] = useState();
  
    const handleClick = async (e) => {
      e.preventDefault();
      const response = await axios.post('https://amazingapp.tplinkdns.com/users/code', {code}).then((data) => {
      console.log(data.data[0]);  
      props.setTestCases(data.data[0])
      if(props.testCases === 'True'){
        setCode('');
        props.setEditorOpen(false)
        props.setIsAttackButtonDisabled(false)
      }
      console.log(props.testCases);
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
          <h4>{props.question}</h4>
          <NewEditor code={code} setCode={setCode} function={props.function}/>
          <button className='submit-btn' onClick={handleClick}>Submit</button>
        </motion.div>
    )


}

export default EditorWrapper