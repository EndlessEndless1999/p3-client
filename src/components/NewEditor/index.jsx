import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';
import { tags as t } from '@lezer/highlight';
import {javascript} from '@codemirror/lang-javascript'


const NewEditor = (props) => {
    return (
        <CodeMirror
        value={props.code}
        extensions={[javascript({ jsx: true })]}
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