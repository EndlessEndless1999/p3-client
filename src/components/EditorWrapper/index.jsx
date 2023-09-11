import React, { useState } from 'react'
import { Editor, ResetButton, RunButton } from '../../components'
import './index.css'

const EditorWrapper = () => {
    const [code, setCode] = useState('')
    const [value, setValue] = useState('')
    const [output, setOutput] = useState('')
    
    const onRun = () => {
        try {
            const func = new Function(code);
            setOutput(func);
            console.log(output);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="editor">
                <div className="editor__wrapper">
                    <div className="editor__body">
                        <div id="editorCode" className="editor__code"><Editor setCode={setCode} value={value}/></div>
                    </div>
                    <div className="editor__footer">
                        <div className="editor__footer--left">
                            <RunButton onRun={onRun}/>
                            <ResetButton setValue={setValue}/>
                        </div>
                        <div className="editor__footer--right">
                            <div className="editor__console">
                                <ul className="editor__console-logs">
                                    <li>{output}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default EditorWrapper