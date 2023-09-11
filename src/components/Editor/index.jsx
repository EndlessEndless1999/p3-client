import React from 'react'
import './index.css'

const Editor = () => {
    return(
        <div className='editor'>
            <div className="editor-wrapper">
                <div className="editor-body">
                    <div className="editor-code">

                    </div>
                </div>
                <div className="editor-footer">
                    <div className="editor-footer-left">
                        <button className='editor-btn editor-run'>Run {'>'} </button>
                        <button className='editor-btn editor-reset'>Reset {'>'}</button>
                    </div>
                    <div className="editor-footer-right">
                        <div className="editor-console">
                            <ul className="editor-console-logs">

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor