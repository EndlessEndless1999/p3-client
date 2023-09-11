import React from 'react'
import  AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"


const Editor = () => {
    return (
        <div>
            <AceEditor 
            width='100%'
            mode='javascript'
            theme='monokai'
            />
        </div>
    )
}

export default Editor