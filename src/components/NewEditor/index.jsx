import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';
import { tags as t } from '@lezer/highlight';
import {python} from '@codemirror/lang-python'


const NewEditor = (props) => {

    return (
        <CodeMirror
        className='code-mirror'
        onChange={(value) => {
            props.setCode(value);  
            console.log(props.code);
        }}
        extensions={[python({ jsx: true })]}
        theme={draculaInit({
            settings: {
              caret: '#c6c6c6',
              fontFamily: 'monospace',
            },
            styles: [
              { tag: t.comment, color: '#6272a4' },
            ]
          })}        
        />
    )
}


export default NewEditor