import React from 'react'

const RunButton = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
        props.onRun();
    }


    return (
        <button className="editor__btn editor__run" onClick={handleClick}>Run {'>'}</button>
    )
}

export default RunButton