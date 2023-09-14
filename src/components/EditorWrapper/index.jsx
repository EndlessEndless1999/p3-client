
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';



import  NewEditor  from '../NewEditor'

const EditorWrapper = (props) => {

    const [code, setCode] = useState();
  
    const handleClick = async (e) => {
      e.preventDefault();
      console.log(code, props.id);
      const response = await axios.post('https://amazingapp.tplinkdns.com/users/code', {code: code, _id: props.id}).then((data) => {
      console.log(data.result);  
      props.setTestCases(data.result)
      if(props.testCases === 'correct'){
        setCode('')
        props.setEditorOpen(false)
        props.setIsAttackButtonDisabled(false)
      }else if (props.testCases === 'incorrect'){
        alert(data.result)
      }else{
        alert(data.error)
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