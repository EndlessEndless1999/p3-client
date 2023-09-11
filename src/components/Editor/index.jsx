import React, { useRef } from 'react'
import  AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"


const Editor = (props) => {
    const ace = useRef();

    const handleChange = (newValue) => {
        props.setCode(newValue);
    }


    return (
        <div>
            <AceEditor 
            ref={ace}
            width='100%'
            mode='javascript'
            theme='monokai'
            onChange={handleChange}
            />
        </div>
    )
}

export default Editor