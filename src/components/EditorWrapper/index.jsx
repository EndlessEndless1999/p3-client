
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';
import { addMessageToLogger } from '../../lib/loggerUtils';



import NewEditor  from '../NewEditor'

const EditorWrapper = (props) => {

    const [code, setCode] = useState(null);
  
    const handleClick = async (e) => {
      e.preventDefault();
      
      await axios.post('/users/code', {code: code, _id: props.id}).then((data) => {
      
      props.setTestCases(data.data.result)
      console.log("ASDASD", data.status, data.data.result);
      if(data.status === 200 && data.data.result === 'correct'){
        setCode('')
        props.setEditorOpen(false)
        props.setIsAttackButtonDisabled(false)
        addMessageToLogger('Command accepted!')
      }else if (props.testCases === 'incorrect'){
        alert(data.result)
      }else{
        alert(data.error)
      }
      
    }).catch(err => console.log("ERROR:" + err))
  
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
          <h5>{props.question}</h5>
          <NewEditor code={code} setCode={setCode} function={props.function}/>
          <button className='submit-btn' onClick={handleClick}>Submit</button>
        </motion.div>
    )


}

export default EditorWrapper